SHELL := /bin/bash

COMPOSE_DEV_FILE := docker/dientu_compose_dev.yaml
COMPOSE_PROD_FILE := docker/dientu_compose_prod.yaml
ENV_DEV_FILE := .env.dev
ENV_PROD_FILE := .env.prod

.PHONY: help dev_up dev_down dev_restart dev_reload prod_up prod_down prod_restart prod_reload git_push

help:
	@echo "Usage: make <target>"
	@echo "Targets:"
	@echo "  dev_up       Start development services in detached mode"
	@echo "  dev_down     Stop development services"
	@echo "  dev_restart  Restart development services"
	@echo "  dev_reload   Rebuild and reload development services"
	@echo "  prod_up      Start production services in detached mode"
	@echo "  prod_down    Stop production services"
	@echo "  prod_restart Restart production services"
	@echo "  prod_reload  Rebuild and reload production services"
	@echo "  git_push     Commit and push changes (use m=message)"

dev_up:
	docker compose --env-file $(ENV_DEV_FILE) -f $(COMPOSE_DEV_FILE) up -d

dev_down:
	docker compose --env-file $(ENV_DEV_FILE) -f $(COMPOSE_DEV_FILE) down

dev_restart:
	docker compose --env-file $(ENV_DEV_FILE) -f $(COMPOSE_DEV_FILE) restart

dev_reload:
	docker compose --env-file $(ENV_DEV_FILE) -f $(COMPOSE_DEV_FILE) up -d --build

prod_up:
	docker compose --env-file $(ENV_PROD_FILE) -f $(COMPOSE_PROD_FILE) up -d

prod_down:
	docker compose --env-file $(ENV_PROD_FILE) -f $(COMPOSE_PROD_FILE) down

prod_restart:
	docker compose --env-file $(ENV_PROD_FILE) -f $(COMPOSE_PROD_FILE) restart

prod_reload:
	docker compose --env-file $(ENV_PROD_FILE) -f $(COMPOSE_PROD_FILE) up -d --build

git_push:
	@if [ -z "$(m)" ]; then \
		echo "Error: please set m=commit message"; exit 1; \
	fi
	@echo "=== Git add ==="
	git add .
	@echo "=== Git commit ==="
	git commit -m "$(m)"
	@echo "=== Git push ==="
	git push --set-upstream origin $(shell git rev-parse --abbrev-ref HEAD)
