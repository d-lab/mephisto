#!/usr/bin/env python3

# Copyright (c) Meta Platforms and its affiliates.
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

import os

from omegaconf import DictConfig

from mephisto.abstractions.blueprints.abstract.static_task.static_blueprint import (
    SharedStaticTaskState,
)
from mephisto.generators.form_composer.configs_validation.extrapolated_config import (
    create_extrapolated_config
)
from mephisto.operations.operator import Operator
from mephisto.tools.scripts import build_custom_bundle
from mephisto.tools.scripts import task_script


@task_script(default_config_file="dynamic_example_ec2_mturk_sandbox")
def main(operator: Operator, cfg: DictConfig) -> None:
    # Build packages
    _build_custom_bundles(cfg)

    shared_state = SharedStaticTaskState()

    # Mephisto qualifications
    shared_state.qualifications = [
        # Custom Mephisto qualifications
    ]

    # Mturk qualifications
    shared_state.mturk_specific_qualifications = [
        # MTurk-specific quality control qualifications
    ]

    operator.launch_task_run(cfg.mephisto, shared_state)
    operator.wait_for_runs_then_shutdown(skip_input=True, log_rate=30)


def _build_custom_bundles(cfg: DictConfig) -> None:
    """ Locally build bundles that are not available on npm repository """
    mephisto_packages_dir = os.path.join(
        # Root project directory
        os.path.dirname(os.path.dirname(os.path.dirname(
            os.path.abspath(__file__)
        ))),
        "packages",
    )

    # Build `mephisto-task-multipart` React package
    build_custom_bundle(
        mephisto_packages_dir,
        force_rebuild=cfg.mephisto.task.force_rebuild,
        webapp_name="mephisto-task-multipart",
        build_command="build",
    )

    # Build `react-form-composer` React package
    build_custom_bundle(
        mephisto_packages_dir,
        force_rebuild=cfg.mephisto.task.force_rebuild,
        webapp_name="react-form-composer",
        build_command="build",
    )

    # Build Review UI for the application
    build_custom_bundle(
        cfg.task_dir,
        force_rebuild=cfg.mephisto.task.force_rebuild,
        webapp_name="webapp",
        build_command="build:review",
    )

    # Build UI for the application
    build_custom_bundle(
        cfg.task_dir,
        force_rebuild=cfg.mephisto.task.force_rebuild,
        post_install_script=cfg.mephisto.task.post_install_script,
    )


def generate_data_json_config():
    """
    Generate extrapolated `data.json` config file,
    based on existing form and tokens values config files
    """
    app_path = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(app_path, "data")

    form_config_path = os.path.join(data_path, "dynamic", "form_config.json")
    tokens_values_config_path = os.path.join(data_path, "dynamic", "tokens_values_config.json")
    extrapolated_form_config_path = os.path.join(data_path, "dynamic", "data.json")

    create_extrapolated_config(
        form_config_path=form_config_path,
        tokens_values_config_path=tokens_values_config_path,
        extrapolated_form_config_path=extrapolated_form_config_path,
    )


if __name__ == "__main__":
    generate_data_json_config()
    main()
