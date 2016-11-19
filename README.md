## Distributed Web Final Project Documentation

**NOTE: REFER TO CODING STANDARD AT BOTTOM OF PAGE**

### Prerequisites

- NodeJS (Download it [here](https://nodejs.org/en/download/current/))
- NPM Modules (thus far)
  - mysql
  - node-timestamp
  - express (for frontend)
  - formidable (also for frontend)

### Project Setup

To setup the project on your local machine, clone the repository to the directory of your choice. Navigate to the repository and execute `npm install mysql`, this will install the mySQL module. There will likely be more modules included later, to install those simply perform an `npm install <package_name>`, all package names will be listed under NPM modules.


### Project Structure

The project is structured as such

```
.
├── frontend.js
├── db_credentials.txt
├── lib
│   ├── credentialStore.js
│   ├── db_template.js
│   ├── dbutils.js
│   └── callbackStore.js
├── package.json
├── README.md
└── node_modules
    └── ...
```

### Component Documentation

**MOVED TO `/docs`**

## Coding Standards

1. When writing out various parts. Write functions that are extensible so they
   can be implemented later when we glue this whole thing together. Avoid
hardcoding sections unless its something obvious.

2. No hacks/bad code. If you cant figure out how to get something working right
   reach out to Sunny for help before making a nutty workaround.

3. DOCUMENT EVERYTHING YOU WRITE: Unless what you write is trivial, explain
   what every object/function does. For complex functions, document sample
implementation. Use the documentation above to as refrence

4. Use existing modules before creating your own (ie, dont create functions to
   write to the DB when there are already functions in place that do that.

5. Put helper functions/objects in /lib, unless it's something tiny.

6. Make sure your repo has a .gitignore before committing, we don't need your
   config files and npm modules in the repo.

