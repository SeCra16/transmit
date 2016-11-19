var DatabaseTools = require('./lib/dbutils');
var CredentialStore = require('./lib/store/credentialStore');



var credentialInstance = new CredentialStore();
var transportStoreInstance = new TransportStore();
var databaseInstance = new DatabaseTools(credentialInstance, transportStoreInstance);

// var getElementID = function() {
//   console.log(`Element ID: ${transportStoreInstance.getData()}`);
// }
//
//
// databaseInstance.autoinsert("test2", "name", "java", getElementID);
//
// databaseInstance.insert("test2", 200, "name", "foobar2000");
//
//
// databaseInstance.select("test2", 200);



var table='test';
var column='url';
var value='aaa';
databaseInstance.contains(table, column, value, callback);
