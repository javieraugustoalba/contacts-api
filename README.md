Contacts API

This is a simple Contacts API built with Node.js and TypeScript. It provides endpoints to create, retrieve, update, and delete contacts.

Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

Installation

1. Clone the repository

   git clone https://github.com/your-username/contacts-api.git
   cd contacts-api

2. Install dependencies

   npm install

Running the Server

To start the server, run:

npm start

The server will be running at http://localhost:3000.

API Endpoints

- Create Contact
  - Method: POST
  - Path: /contacts
  - Request Body: JSON object representing the contact
  - Response: JSON object of the created contact with an assigned ID

- Get Contact by ID
  - Method: GET
  - Path: /contacts/{id}
  - Path Parameter: id (contact ID)
  - Response: JSON object of the contact with the provided ID

- Update Contact
  - Method: PUT
  - Path: /contacts/{id}
  - Path Parameter: id (contact ID)
  - Request Body: JSON object representing the updated contact
  - Response: JSON object of the updated contact

- Delete Contact
  - Method: DELETE
  - Path: /contacts/{id}
  - Path Parameter: id (contact ID)
  - Response: No content (204 status code) upon successful deletion

Running Tests

To run the unit tests, use:

npm test

Generating Documentation

This project uses TypeDoc for generating documentation. To generate the documentation, run:

npm run docs

The documentation will be generated in the docs folder.

Project Structure

src/
  controllers/
    contact-controller.ts
  models/
    contact.ts
  index.ts
tests/
  contact-controller.test.ts

- src/controllers/contact-controller.ts: Contains the logic for handling contacts.
- src/models/contact.ts: Defines the Contact model.
- src/index.ts: Sets up the Express server and routes.
- tests/contact-controller.test.ts: Contains unit tests for the contact controller.

.gitignore

The .gitignore file includes common exclusions such as node_modules, dist, .env, and .DS_Store.

# Ignore node_modules
node_modules/

# Ignore log files
*.log

# Ignore TypeScript build folder
dist/

# Ignore environment variables
.env

# Ignore Mac system files
.DS_Store

Estimate of Time to Complete the Project

- Setting up the project (installation, configuration): 30 minutes
- Creating the Contact model: 15 minutes
- Implementing the controller logic: 1 hour
- Setting up the Express server and routes: 30 minutes
- Writing and running unit tests: 30 minutes
- Generating documentation with TypeDoc: 15 minutes
- Writing the README.md file: 15 minutes

Total estimated time: 3 hours 15 minutes

Thanks!
