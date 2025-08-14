#!/bin/bash

echo "🚀 Update Google Cloud OAuth config (Docker lighter mode)..."

if [ ! -f .env ]; then
    echo "❌ ERROR: .env doesn't exist. Please create it with the required variables."
    exit 1
fi
export $(cat .env | sed 's/#.*//g' | xargs)

if [ ! -f gcloud-key.json ]; then
    echo "❌ ERROR: gcloud-key.json file does not exist. Please create it with your Google Cloud service account key."
    exit 1
fi
if [ -z "$PROJECT_ID" ] || [ -z "$GOOGLE_CLIENT_ID" ]; then
    echo "❌ ERROR: PROJECT_ID or GOOGLE_CLIENT_ID doesn't set in .env file. Please check your .env file."
    exit 1
fi

CURRENT_IP=$(curl -s ifconfig.me)
if [ -z "$CURRENT_IP" ]; then
    echo "❌ ERROR: Can not take IP address. Please check your network connection."
    exit 1
fi
echo "✅ Current IP: $CURRENT_IP"

NEW_ORIGIN="https://transcendence.${CURRENT_IP}.nip.io:8443"
NEW_CALLBACK_URI="https://transcendence.${CURRENT_IP}.nip.io:8443/api/users/login/google/callback"

echo "🐳 Send request by using docker..."

DOCKER_COMMAND=$(cat <<EOF
apk add --no-cache jq && \\
echo "1. Request auth token..." && \\
ACCESS_TOKEN=\$(gcloud auth application-default print-access-token) && \\
echo "2. Call upadate API..." && \\
curl -s -X PATCH \\
    -H "Authorization: Bearer \$ACCESS_TOKEN" \\
    -H "Content-Type: application/json" \\
    -d '{ "javascriptOrigins": ["${NEW_ORIGIN}"], "redirectUris": ["${NEW_CALLBACK_URI}"] }' \\
    "https://iap.googleapis.com/v1/projects/${PROJECT_ID}/brands/${PROJECT_ID}/identityAwareProxyClients/${OAUTH_CLIENT_ID}?update_mask=javascriptOrigins,redirectUris"
EOF
)

docker run --rm \\
    -v "$(pwd)/gcloud-key.json:/gcp/key.json" \\
    -e "GOOGLE_APPLICATION_CREDENTIALS=/gcp/key.json" \\
    google/cloud-sdk:alpine \\
    sh -c "$DOCKER_COMMAND"

if [ $? -ne 0 ]; then
    echo "❌ ERROR: Fail to update with Docker."
    exit 1
fi

echo "🎉 Google Cloud updating is successful!"