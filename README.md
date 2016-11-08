## Distributed Web Final Project Documentation

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
