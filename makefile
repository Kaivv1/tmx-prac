migrate-up:
	cd server
	docker-compose exec server npx sequelize-cli db:migrate
migrate-down:
	cd server
	docker-compose exec server npx sequelize-cli db:migrate:undo
start-dev:
	docker-compose -f docker-compose.dev.yml up
test-prod:
	docker-compose -f docker-compose.prod.yml up --build