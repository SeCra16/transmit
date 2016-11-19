# dbutils.js

##### NOTE: datastore.js has been renamed callbackStore.js


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

[/lib/callbackStore.js] [Object] TransportStore()

* Creates a TransportStore object, useful for moving data around without inheritance

[/lib/callbackStore.js] [Function] TransportStore.setData()

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

[/lib/dbtools.js] [Function] DatabaseTools.contains(table, column, value, callback)

* Checks if `table` with `column` contains `value`. Returns true/false with transportStore and a callback.

* Going to be useful for fakepath, namely determining if a string has already been used


[/lib/dbtools.js] [Function] DatabaseTools.fk_insert(table, column, ftable, id, value)

* Inserts a value into a table whose ID is a foriegn key from another table

`table`: local table

`column`: local column

`ftable`: foriegn table

`id`: foreign id (you should have this in a callback)

`value`: the value being inserted into the local table


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
