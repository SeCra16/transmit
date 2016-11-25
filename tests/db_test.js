/**
 * Created by sgolovine on 11/24/16.
 */
// Testing the new DB script


var CredentialStore = require('../lib/store/credentialStore');
var DatabaseTools = require('../lib/dbutils');

var cstore = new CredentialStore();
var dbt = new DatabaseTools(cstore);

dbt.autoinsert('timestamp', 'timestamp', '2016-11-16 15:06:35', function(value) {
    console.log(value);
});