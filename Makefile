
# Arguments taken as input
.PHONY: compile test start stop rebuild rmi
SHELL := /bin/bash
_ARGS=$(firstword $(MAKECMDGOALS))
ifeq ($(shell [[ $(_ARGS) == compile || $(_ARGS) == test || $(_ARGS) == test-api-one || $(_ARGS) == push-to-ecr || $(_ARGS) == start || $(_ARGS) == restart || $(_ARGS) == stop || $(_ARGS) == rebuild || $(_ARGS) == rmi ]] && echo true ),true)
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

DOCKER_MACHINE_NAME=default

help:
	@IFS=$$'\n' ; \
        help_lines=(`fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//'`); \
        for help_line in $${help_lines[@]}; do \
            IFS=$$'#' ; \
            help_split=($$help_line) ; \
            help_command=`echo $${help_split[0]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
            help_info=`echo $${help_split[2]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
            printf "%-20s %s\n" $$help_command $$help_info ; \
        done

##
##
##
##          *** ALL SERVICES DIRECTIVES
##
up: ## spins up all the services (if image does not exists it will create one)
	docker compose up -d --wait


down:## shuts down all the docker compose configuration
	docker compose --verbose stop

clean:## cleans docker compose configuration removing services containers
	docker compose --verbose stop
	docker compose --verbose rm -f

rebuild-all:##Stops, removes and rebuilds all container
	docker compose stop || true
	docker compose rm -f || true
	docker compose up db --detach --wait
	docker compose up --detach --no-deps --build --wait

ps:## shows all services status
	docker compose ps

logs:## Shows services logs
	docker compose logs -f --timestamps

free-space:## Frees some space in your local docker environment
	docker system prune -f

clean-db:## Removes the DB and re-initialises it, which syncs DB changes from the repo
	docker compose stop || true
	docker compose rm -f db || true
    # DB needs to be started before the other services
	docker compose up db --detach --wait
	docker compose up --detach --wait

##
##
##
##          *** SINGLE SERVICES DIRECTIVES
##
start:##Starts a specific service
	docker compose up -d --wait "$(RUN_ARGS)"

restart:##Re-Starts a specific service
	docker compose restart "$(RUN_ARGS)"

stop:##Stops a specific service
	docker compose stop "$(RUN_ARGS)"

rebuild:##Stops, removes and rebuilds container
	docker compose stop "$(RUN_ARGS)" || true
	docker compose rm -f "$(RUN_ARGS)" || true
	docker compose up -d --no-deps --build --wait "$(RUN_ARGS)"

rmi:##Deletes service image and container, and any other stopped images
	docker compose stop "$(RUN_ARGS)" || true
	docker compose rm -f "$(RUN_ARGS)" || true
	docker image list | grep "$(RUN_ARGS)" | awk '{system("docker image rm -f " $$3)}'



