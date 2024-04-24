#!/usr/bin/env python3

# Copyright (c) Meta Platforms and its affiliates.
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

import os
import shutil
from datetime import datetime
from pathlib import Path
from types import MethodType
from typing import Dict
from typing import List
from typing import Optional

from mephisto.abstractions.database import MephistoDB
from mephisto.data_model.task_run import TaskRun
from mephisto.tools.db_data_porter.constants import DATASTORE_EXPORT_METHOD_NAME
from mephisto.tools.db_data_porter.constants import MEPHISTO_DUMP_KEY
from mephisto.tools.db_data_porter.constants import TASK_RUNS_TABLE_NAME
from mephisto.tools.db_data_porter.randomize_ids import get_old_pk_from_substitutions
from mephisto.utils import db as db_utils
from mephisto.utils.console_writer import ConsoleWriter
from mephisto.utils.dirs import get_data_dir

logger = ConsoleWriter()


def prepare_partial_dump_data(
    db: "MephistoDB",
    task_names: Optional[List[str]] = None,
    task_ids: Optional[List[str]] = None,
    task_run_ids: Optional[List[str]] = None,
    task_runs_labels: Optional[List[str]] = None,
    since_datetime: Optional[datetime] = None,
) -> dict:
    dump_data_to_export = {}

    # Mephisto DB

    # Convert all parameters to `task_run_ids` (TaskRun is the main object in DB)
    if not task_run_ids:
        if task_names or task_ids:
            if task_names:
                task_ids = db_utils.get_task_ids_by_task_names(db, task_names)
            task_ids = task_ids or []
            task_run_ids = db_utils.get_task_run_ids_ids_by_task_ids(db, task_ids)
        elif task_runs_labels:
            task_run_ids = db_utils.get_task_run_ids_ids_by_labels(db, task_runs_labels)
        elif since_datetime:
            task_run_ids = db_utils.select_task_run_ids_since_date(db, since_datetime)

    logger.info(f"Run command for TaskRun IDs: {', '.join(task_run_ids)}.")

    mephisto_db_data = db_utils.mephisto_db_to_dict_for_task_runs(db, task_run_ids)
    dump_data_to_export[MEPHISTO_DUMP_KEY] = mephisto_db_data

    # Providers' DBs
    provider_types = [i["provider_type"] for i in mephisto_db_data["requesters"]]

    for provider_type in provider_types:
        provider_datastore = db.get_datastore_for_provider(provider_type)
        dump_data_to_export[provider_type] = db_utils.db_or_datastore_to_dict(
            provider_datastore,
        )

        # Get a method-function from provider-datastore.
        # There is a provider-specific logic of exporting DB data as it can have any scheme.
        # It can be missed and not implemented at all
        datastore_export_method: MethodType = getattr(
            provider_datastore, DATASTORE_EXPORT_METHOD_NAME, None,
        )
        if datastore_export_method:
            datastore_export_data = datastore_export_method(
                task_run_ids=task_run_ids, mephisto_db_data=mephisto_db_data,
            )
        else:
            # If method was not implemented in provider datastore, we export all tables fully.
            error_message = (
                f"You did not implement "
                f"{provider_datastore.__class__.__name__}.{DATASTORE_EXPORT_METHOD_NAME}."
                f"Exporting full datastore. Specify logic of selecting related table rows "
                f"in your provider datastore or leave it as it is."
            )
            logger.error(f"[red]{error_message}[/red]")
            datastore_export_data = db_utils.db_or_datastore_to_dict(provider_datastore)

        dump_data_to_export[provider_type] = datastore_export_data

    return dump_data_to_export


def prepare_full_dump_data(db: "MephistoDB", provider_datastores: Dict[str, "MephistoDB"]) -> dict:
    dump_data_to_export = {}

    logger.info(f"Run command for all TaskRuns.")

    # Mephisto DB
    dump_data_to_export[MEPHISTO_DUMP_KEY] = db_utils.db_or_datastore_to_dict(db)

    # Providers' DBs
    for provider_type, provider_datastore in provider_datastores.items():
        dump_data_to_export[provider_type] = db_utils.db_or_datastore_to_dict(provider_datastore)

    return dump_data_to_export


def delete_exported_data(
    db: "MephistoDB",
    dump_data_to_export: dict,
    pk_substitutions: dict,
    partial: bool = False,
    delete_tasks: bool = False,
):
    # 1. Mephisto DB
    if not partial:
        # Clean DB
        db_utils.delete_entire_exported_data(db)

        # Clean related files
        mephisto_data_files_path = os.path.join(get_data_dir(), "data")
        for filename in os.listdir(mephisto_data_files_path):
            file_path = os.path.join(mephisto_data_files_path, filename)
            try:
                if os.path.isfile(file_path) or os.path.islink(file_path):
                    Path(file_path).unlink(missing_ok=True)
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)
            except Exception as e:
                logger.warning(f"Failed to delete '{file_path}'. Reason: {e}")
    else:
        # NOTE: We cannot remove all exported rows from DB that are presented in dump,
        # because some objects can be common among other Projects, Tasks, etc.
        # E.g. you cannot remove Task, Worker, Qualification
        # just because it was related to the exported TaskRuns,
        # they are used or can be used in the future for other Projects, Tasks or TaskRuns.
        names_of_tables_to_cleanup = [
            "agents",
            "assignments",
            "task_runs",
            "unit_review",
            "units",
        ]
        if delete_tasks:
            names_of_tables_to_cleanup.append("tasks")

        # Get directories related to dumped TaskRuns
        task_run_rows = dump_data_to_export.get(MEPHISTO_DUMP_KEY, {}).get(
            TASK_RUNS_TABLE_NAME, [],
        )
        task_runs_pk_field_name = db_utils.get_table_pk_field_name(db, TASK_RUNS_TABLE_NAME)
        task_run_ids = [r[task_runs_pk_field_name] for r in task_run_rows]
        task_run_ids = [
            get_old_pk_from_substitutions(i, pk_substitutions, TASK_RUNS_TABLE_NAME) or i
            for i in task_run_ids
        ]

        task_run_data_dirs = [TaskRun.get(db, i).get_run_dir() for i in task_run_ids]

        # Clean DB
        db_utils.delete_exported_data_without_fk_constraints(
            db, dump_data_to_export[MEPHISTO_DUMP_KEY], names_of_tables_to_cleanup,
        )

        # Clean related files
        for task_run_data_dir in task_run_data_dirs:
            try:
                shutil.rmtree(task_run_data_dir)
            except Exception as e:
                logger.warning(f"Failed to delete '{task_run_data_dir}'. Reason: {e}")
