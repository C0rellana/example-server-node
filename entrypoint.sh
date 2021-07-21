#!/bin/bash

if [ "$NODE_ENV" = "development" ] || [ "$NODE_ENV" = "local" ]; 
  then
  	echo "Use dev as "$NODE_ENV
  	npm install
	npm install -g --force nodemon
	npm install -g --force @babel/core @babel/node @babel/preset-env
	npm install eslint --save-dev
  	npm run start-dev
  else
  	echo "Use pro as "$NODE_ENV
  	npm run start
fi