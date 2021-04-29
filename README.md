# SoftwareEngineering Projekt

## Requirement
- an up to date installation of Node.js

## Installing the Project
Execute the following shell commands from the root directory of this repository to install all dependencies.
- $cd großmarkt-frontend-app
- $npm install
- $cd ../swe-node-server
- $npm install
- $cd ..

## Starting the dev environment
Execute the following shell commands from the root directory of this repository to start a development environment visible on http://localhost:5000
- $cd großmarkt-frontend-app
- $npm run dev
- $cd ../swe-node-server
- $npm run dev
- $cd ..

## Building the production environment
Execute the following shell commands from the root directory of this repository to build the final frontend, ready to be deployed:
It will be built to the ./großmarkt-frontend-app/public folder.
- $cd großmarkt-frontend-app
- $npm run build
- $cd ..

## Starting the production environment
Execute the following shell commands from the root directory of this repository to deploy the page in single-page-mode:
- $cd großmarkt-frontend-app
- $npm run start
- $cd ..
The app is now served on the port displayed in the terminal.

## Additional information
The Node.js Server has to run on the same host as the Website. 

Execute the following shell commands from the root directory of this repository to start the Node.js server:
- $cd swe-node-server
- $npm run start
- $cd ..
It is now running on the port displayed in the terminal.

The Server does not serve the Website, they are separate entities.

No "real" database has been added to the project all data is stored in JSON-files