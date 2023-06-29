#!/usr/bin/env python3

# Copyright (c) Facebook, Inc. and its affiliates.
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

import os
import json

import boto3  # type: ignore
import botocore

import mephisto.abstractions.architects.ec2.ec2_helpers as ec2_helpers
from mephisto.abstractions.architects.ec2.ec2_helpers import DEFAULT_FALLBACK_FILE
from mephisto.abstractions.architects.ec2.ec2_helpers import DEFAULT_SERVER_DETAIL_LOCATION
from mephisto.utils.logger_core import get_logger

EXCLUDE_FILES_IN_SERVER_DIR = [
    os.path.basename(DEFAULT_FALLBACK_FILE),
]

logger = get_logger(name=__name__)


# TODO Hydrize
def main():
    # Get servernames from JSON files in servers directory (DEFAULT_SERVER_DETAIL_LOCATION)
    all_server_names = [
        os.path.splitext(s)[0]
        for s in os.listdir(DEFAULT_SERVER_DETAIL_LOCATION)
        if s.endswith('json') and s not in EXCLUDE_FILES_IN_SERVER_DIR
    ]
    n_names = len(all_server_names)

    if not n_names:
        logger.warning('No server to clean up!')
        return

    logger.info(f'Found {n_names} server names: {", ".join(all_server_names)}')

    # Get EC2 user role
    iam_role_name = input('Please enter local profile name for IAM role\n>> ')

    # Clean directory with server JSON files (DEFAULT_SERVER_DETAIL_LOCATION)
    for i, server_name in enumerate(all_server_names):
        logger.info(f'Removing {i+1}/{n_names} server "{server_name}"...')
        session = boto3.Session(profile_name=iam_role_name, region_name='us-east-2')
        try:
            ec2_helpers.remove_instance_and_cleanup(session, server_name)
            logger.info(f'..."{server_name}" was removed!')
        except botocore.exceptions.ClientError as e:
            logger.info(f'..."{server_name}" could not be removed - {e}')
        except json.decoder.JSONDecodeError as e:
            logger.info(f'..."{server_name}" could not read JSON config - {e}')
        except Exception as e:
            logger.info(f'..."{server_name}" encountered error - {e}')


if __name__ == '__main__':
    main()
