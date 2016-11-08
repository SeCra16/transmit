## Distributed Web Final Project Documentation

**NOTE: REFER TO CODING STANDARD AT BOTTOM OF PAGE**


### Prerequisites

- NodeJS (Download it [here](https://nodejs.org/en/download/current/))
- NPM Modules (thus far)
  - mysql

### Project Setup

To setup the project on your local machine, clone the repository to the directory of your choice. Navigate to the repository and execute `npm install mysql`, this will install the mySQL module. There will likely be more modules included later, to install those simply perform an `npm install <package_name>`, all package names will be listed under NPM modules.


### Project Structure

The project is structured as such

```
.
├── app.js
├── db_credentials.txt
├── lib
│   ├── credentialStore.js
│   ├── db_template.js
│   ├── dbutils.js
│   └── transportStore.js
├── package.json
├── README.md
└── node_modules
    └── ...
```

### Componenets

[/lib/credentialStore.js] [Object] CredentialStore(server, user, password, database)

* Creates a CredentialStore object, useful for passing credentials in odd places

[/lib/credentialStore.js] [Function] CredentialStore.getServer()

* Getter for CredentialStore server field

[/lib/credentialStore.js] [Function] CredentialStore.getUser()

* Getter for CredentialStore user field

[/lib/credentialStore.js] [Function] CredentialStore.getPassword()

* Getter for CredentialStore password field

[/lib/credentialStore.js] [Function] CredentialStore.getDatabase()

* Getter for CredentialStore database field

---

[/lib/transportStore.js] [Object] TransportStore()

* Creates a TransportStore object, useful for moving data around without inheritance

[/lib/transportStore.js] [Function] TransportStore.setData()

* Sets the data in the TransportStore object

[/lib/credentialStore.js] [Function] TransportStore.getData()

* Gets the data from the TransportStore object

---

[/lib/dbtools.js] [Object] DatabaseTools(credentialInstance, transportInstance)

* Creates a DatabaseTools object, requires credentialStore and dataStore objects. Useful for making mySQL queries without tons of code.

[/lib/dbtools.js] [Function] DatabaseTools.select(table, id)

* Returns a value from a table with the specified ID

[/lib/dbtools.js] [Function] DatabaseTools.autoinsert(table, column, value, callback)

* Inserts a value into a specified table, automatically assigning it an ID and returning the ID via transportStore. Refer to Implementation for more details on usage

[/lib/dbtools.js] [Function] DatabaseTools.insert(table, id, column, value)

* Inserts a value into a specified table with a specified id and value. Refer to Implementation for more details on usage


## Implementation


### DatabaseTools sample Implementation

```
var credentialInstance = new CredentialStore(server, user, password, database);
// Create a CredentialStore instance

var transportStoreInstance = new TransportStore();
//Create a TransportStore instance

var databaseInstance = new DatabaseTools(credentialInstance, transportStoreInstance);
//Create a DatabaseTools instance with the TransportStore and CredentialStore instances as arguments


// Create a callback function
var callback = function() {
  var eid = transportStoreInstance.getData()
  ...
  // Do something w/eid
}

// Calling autoinsert
databaseInstance.autoinsert("sample_table", "name", "John Doe", callback);

databaseInstance.insert("sample_table", 200, "name", "Jane Doe");

```

Note that the table after the `autoinsert` and `insert` command will look like:

`SELECT * FROM sample_table`

| id  | name     |
|-----|----------|
| 1   | John Doe |
| 200 | Jane Doe |


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

