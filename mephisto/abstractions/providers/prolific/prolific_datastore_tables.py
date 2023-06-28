#!/usr/bin/env python3

# Copyright (c) Facebook, Inc. and its affiliates.
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

CREATE_STUDIES_TABLE = """
    CREATE TABLE IF NOT EXISTS studies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        prolific_study_id TEXT UNIQUE,
        link TEXT,
        assignment_time_in_seconds INTEGER NOT NULL,
        creation_date DATETIME DEFAULT CURRENT_TIMESTAMP
    );
"""

CREATE_SUBMISSIONS_TABLE = """
    CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        prolific_submission_id TEXT UNIQUE,
        prolific_study_id TEXT,
        creation_date DATETIME DEFAULT CURRENT_TIMESTAMP
    );
"""

CREATE_RUN_MAP_TABLE = """
    CREATE TABLE IF NOT EXISTS run_mappings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        prolific_study_id TEXT,
        run_id TEXT
    );
"""

CREATE_REQUESTERS_TABLE = """
    CREATE TABLE IF NOT EXISTS requesters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        requester_id TEXT UNIQUE,
        is_registered BOOLEAN
    );
"""

CREATE_UNITS_TABLE = """
    CREATE TABLE IF NOT EXISTS units (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        unit_id TEXT UNIQUE,
        run_id TEXT,
        prolific_study_id TEXT,
        is_expired BOOLEAN DEFAULT false
    );
"""

CREATE_WORKERS_TABLE = """
    CREATE TABLE IF NOT EXISTS workers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        worker_id TEXT UNIQUE,
        is_blocked BOOLEAN default false
    );
"""

CREATE_QUALIFICATIONS_TABLE = """
    CREATE TABLE IF NOT EXISTS qualifications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        qualification_name TEXT UNIQUE,
        requester_id TEXT,
        prolific_project_id TEXT,
        prolific_participant_group_name TEXT,
        prolific_participant_group_id TEXT,
        creation_date DATETIME DEFAULT CURRENT_TIMESTAMP
    );
"""

CREATE_RUNS_TABLE = """
    CREATE TABLE IF NOT EXISTS runs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        run_id TEXT UNIQUE,
        arn_id TEXT,
        prolific_workspace_id TEXT NOT NULL,
        prolific_project_id TEXT NOT NULL,
        prolific_study_id TEXT,
        prolific_study_config_path TEXT NOT NULL,
        creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        frame_height INTEGER NOT NULL DEFAULT 650
    );
"""
