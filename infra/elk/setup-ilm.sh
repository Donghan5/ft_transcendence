#!/bin/sh

# Check if curl is available
if ! command -v curl >/dev/null 2>&1; then
  echo "Error: curl is not installed in the container."
  exit 1
fi

# Wait for Elasticsearch to be ready
until curl -s -u "${ELASTIC_USER}:${ELASTIC_PASSWORD}" http://elasticsearch:9200/_cluster/health | grep -q '"status":"green"\|"status":"yellow"'; do
  if [ $attempt -ge 12 ]; then
    echo "Error: Elasticsearch not ready after 12 attempts."
    exit 1
  fi
  attempt=$((attempt + 1))
  sleep 10
done

# Verify retention-policy.json exists and is readable
if [ ! -r /retention-policy.json ]; then
  echo "Error: /retention-policy.json is missing or not readable."
  exit 1
fi

# Apply ILM policy
response=$(curl -s -w "\n%{http_code}" -X PUT "http://elasticsearch:9200/_ilm/policy/pong_retention_policy" \
  -u "${ELASTIC_USER}:${ELASTIC_PASSWORD}" \
  -H 'Content-Type: application/json' \
  -d @/retention-policy.json)
http_code=$(echo "$response" | tail -n1)
response_body=$(echo "$response" | sed -e '$d')
if [ "$http_code" -ne 200 ] || ! echo "$response_body" | grep -q '"acknowledged":true'; then
  echo "Failed to apply retention policy. HTTP Code: $http_code, Response: $response_body"
  exit 1
fi

# Create index template for pong-logs-*
response=$(curl -s -w "\n%{http_code}" -X PUT "http://elasticsearch:9200/_index_template/pong_logs_template" \
  -u "${ELASTIC_USER}:${ELASTIC_PASSWORD}" \
  -H 'Content-Type: application/json' \
  -d '{
    "index_patterns": ["pong-logs-*"],
    "template": {
      "settings": {
        "index.lifecycle.name": "pong_retention_policy"
      }
    }
  }')
http_code=$(echo "$response" | tail -n1)
response_body=$(echo "$response" | sed -e '$d')
if [ "$http_code" -ne 200 ] || ! echo "$response_body" | grep -q '"acknowledged":true'; then
  echo "Failed to create index template. HTTP Code: $http_code, Response: $response_body"
  exit 1
fi

echo "ILM setup completed."