COMPOSE = docker compose --env-file docker/.env.dev -f docker/dientu_compose_dev.yaml

.PHONY: help up build reload down ci

help:
	@echo "make up       - Start dev containers in background"
	@echo "make build    - Build dev images"
	@echo "make reload   - Rebuild images and start dev containers in background"
	@echo "make down     - Stop and remove dev containers"
	@echo "make ci       - Validate Docker Compose config"

up:
	$(COMPOSE) up -d

build:
	$(COMPOSE) build

reload:
	$(COMPOSE) up --build -d

down:
	$(COMPOSE) down

ci:
	$(COMPOSE) config
