ifeq ($(shell uname),Darwin)
    # macOS
    LOCAL_IP := $(shell ipconfig getifaddr en0 || ipconfig getifaddr en1)
else ifeq ($(shell uname),Linux)
    # Linux
    LOCAL_IP := $(shell hostname -I | awk '{print $$1}')
else
    # Windows (in Git Bash/WSL)
    LOCAL_IP := $(shell powershell.exe -Command "Get-NetIPAddress -AddressFamily IPv4 | Where-Object PrefixOrigin -eq 'Dhcp' | Select-Object -First 1 -ExpandProperty IPAddress" | tr -d '\r')
endif

# Export for docker-compose
export LOCAL_IP

# Include .env file if it exists
-include .env
export

REQUIRED_ENV_VARS = GOOGLE_CLIENT_ID GOOGLE_CLIENT_SECRET JWT_SECRET VITE_GOOGLE_CLIENT_ID ELASTIC_USER ELASTIC_PASSWORD KIBANA_USER KIBANA_PASSWORD LOGSTASH_USER LOGSTASH_PASSWORD KIBANA_ENCRYPTION_KEY

all: up

start:
	@echo "Starting application with dynamic IP detection..."
	@./start.sh

build:
	docker-compose build --pull

up: check-env
	docker-compose --profile elk up --build -d
	@open https://transcendence.${LOCAL_IP}.nip.io:8443 2>/dev/null || xdg-open https://transcendence.${LOCAL_IP}.nip.io:8443 2>/dev/null || echo "Open https://transcendence.${LOCAL_IP}.nip.io:8443"


down:
	docker-compose down --remove-orphans

clean: down
	@echo "Removing all stopped containers, networks, images, and volumes..."

fclean: clean
	docker-compose rm -fsv
	docker image prune -f
	docker volume prune -f
	@echo "Delete all images and volumes..."

re: fclean all
	@echo "Rebuilding and restarting the containers...(totally clean)"

logs:
	docker-compose logs -f --tail=100

ps:
	docker-compose ps

sh:    # example usage: make sh c=backend
	docker-compose exec $(c) sh

debug:
	docker-compose logs --tail=200 $(c)
	docker-compose exec $(c) sh -c 'echo -e "\n=== ENV ==="; env; echo -e "\n=== PROC ==="; ps aux'

test: fclean
	@echo "Rebuilding backend container with the latest code..."
	@docker-compose build --no-cache backend
	@docker-compose up -d --no-deps backend
    
	@echo "Building all projects inside the container..."
	@docker-compose exec -w /usr/src/app backend npm run build --workspace=ft-transcendence-backend
    
	@echo "Running tests in backend..."
	@docker-compose exec -e NODE_ENV=test -w /usr/src/app/apps/backend backend npm test


web-game: check-env
	@echo "Starting up non-ELK services (frontend, backend, nginx)..."
	@docker-compose up --build -d
	@open https://transcendence.${LOCAL_IP}.nip.io:8443 2>/dev/null || xdg-open https://transcendence.${LOCAL_IP}.nip.io:8443 2>/dev/null || echo "Open https://transcendence.${LOCAL_IP}.nip.io:8443"

check-env:
	@if [ ! -f .env ]; then \
		echo "Error: .env file is missing. Please create a .env file with all required variables."; \
		exit 1; \
	fi
	@for var in $(REQUIRED_ENV_VARS); do \
		if ! grep -q "^$${var}=" .env; then \
			echo "Error: Required variable $${var} is missing in .env file."; \
			exit 1; \
		fi; \
		if grep -q "^$${var}=$$" .env; then \
			echo "Error: Required variable $${var} is empty in .env file."; \
			exit 1; \
		fi; \
	done
	@if ! grep -q "KIBANA_ENCRYPTION_KEY=.*" .env || [ $$(grep "^KIBANA_ENCRYPTION_KEY=" .env | cut -d= -f2 | wc -c) -lt 32 ]; then \
		echo "Error: KIBANA_ENCRYPTION_KEY must be at least 32 characters long."; \
		exit 1; \
	fi

kibana-open:
	@echo "Username: $${ELASTIC_USER}"
	@echo "Password: $${ELASTIC_PASSWORD}"
	@open http://localhost:5601 2>/dev/null || xdg-open http://localhost:5601 2>/dev/null || echo "Open http://localhost:5601"


.PHONY: all start build up down clean fclean re logs ps sh debug test check-env kibana-open
