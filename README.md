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
Execute the following shell commands from the root directory of this repository to build the final frontend, ready to be deployed.
It will be built to the ./großmarkt-frontend-app/build folder.
- $cd großmarkt-frontend-app
- $npm run build
- $cd ..

## Additional information
The Node.js Server has to run on the same host as the Website. 

The Server does not serve the Website, they are separate entities.

No "real" database has been added to the project all data is stored in JSON-files