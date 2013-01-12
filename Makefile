test:
	mocha
build:
	uglifyjs  -c  -o persian.min.js persian.js
.PHONY: test