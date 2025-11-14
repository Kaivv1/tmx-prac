migrate-up:
	cd server
	docker-compose exec server npx sequelize-cli db:migrate
migrate-down:
	cd server
	docker-compose exec server npx sequelize-cli db:migrate:undo