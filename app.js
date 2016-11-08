var DatabaseTools = require('./lib/dbutils');
var CredentialStore = require('./lib/credentialStore');
var TransportStore = require('./lib/transportStore');
async = require('async');

var user = "user1";
var password = "user1";
var server = "localhost";
var database = "fileshare_system";


var credentialInstance = new CredentialStore(server, user, password, database);
var transportStoreInstance = new TransportStore();
var databaseInstance = new DatabaseTools(credentialInstance, transportStoreInstance);

var getElementID = function() {
  console.log(`Element ID: ${transportStoreInstance.getData()}`);
}


// databaseInstance.autoinsert("test2", "name", "java", getElementID);

// databaseInstance.insert("test2", 200, "name", "foobar2000");


databaseInstance.select("test2", 200);
