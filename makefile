node:
	docker exec -it rpsls-node bash

check:
	docker exec rpsls-node npm run lint:check
	docker exec rpsls-node npm run format:check

fix:
	docker exec rpsls-node npm run lint:fix
	docker exec rpsls-node npm run format:fix

ci:
	docker exec rpsls-node npm run lint:check
	docker exec rpsls-node npm run format:check
	docker exec rpsls-node npm run test:unit:ci