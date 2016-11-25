var fs = require('fs');
var path = require('path');
var root = path.dirname(require.main.filename);

var CredentialStore = function() {
  var rawCredentials = fs.readFileSync(root + "/../config/test_auth.json");
  var parsedCredentials = JSON.parse(rawCredentials);

  var username = parsedCredentials.username;
  var password = parsedCredentials.password;
  var hostname = parsedCredentials.hostname;
  var database = parsedCredentials.database;

  this.getUser = function() {
    return username;
  };
  this.getPassword = function() {
    return password;
  };
  this.getServer = function() {
    return hostname;
  };
  this.getDatabase = function() {
    return database;
  };
};
module.exports = CredentialStore;