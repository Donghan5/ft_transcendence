all: start 

start:
	@echo "Starting application with dynamic IP detection..."
	@./start.sh

build:
	docker-compose build --pull

up:
	docker-compose up -d

down:
	docker-compose down --remove-orphans

clean: down
	@echo "Removing all stopped containers, networks, images, and volumes..."

fclean: clean
	docker-compose rm -fsv
	docker image prune -f
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

.PHONY: all start build up down clean fclean re logs ps sh debug test
