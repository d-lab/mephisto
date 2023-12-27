#!/bin/sh

# Copyright (c) Meta Platforms and its affiliates.
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

set -e

pip install pytest black
cd /mephisto
mkdir -p "data" && chmod 777 "data"

mephisto register prolific name=prolific api_key=$PROLIFIC_API_KEY

exec "$@"
