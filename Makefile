build:
	docker-compose build --pull

up:
	docker-compose up -d

down:
	docker-compose down --remove-orphans

logs:
	docker-compose logs -f --tail=100

ps:
	docker-compose ps

sh:    # example usage: make sh c=backend
	docker-compose exec $(c) sh

.PHONY: build up down logs ps sh
