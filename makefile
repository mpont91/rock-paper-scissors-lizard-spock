check:
	npm run lint:check
	npm run format:check

fix:
	npm run lint:fix
	npm run format:fix

ci:
	npm run lint:check
	npm run format:check
	npm run test:unit:ci