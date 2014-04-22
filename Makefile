SRC = $(shell find lib -name "*.js" ! -name ".\#*.js")

build: node_modules components $(SRC)
	@./node_modules/.bin/component build --dev

components: component.json
	@./node_modules/.bin/component install

node_modules: package.json
	@npm install
