#!/usr/bin/env bash

set -Eeou pipefail

oauth2c "${OAUTH2_ENDPOINT}" \
  --client-id "${OAUTH2_CLIENT_ID}" \
  --client-secret "${OAUTH2_CLIENT_SECRET}" \
  --response-types code \
  --response-mode query \
  --auth-method client_secret_basic \
  --grant-type authorization_code \
  --scopes api,offline_access
