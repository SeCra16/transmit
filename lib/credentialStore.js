var CredentialStore = function(server, user, password, database) {
  this._server = server;
  this._user = user;
  this._password = password;
  this._database = database;
}
CredentialStore.prototype.getServer = function() {
  return this._server;
}
CredentialStore.prototype.getUser = function() {
  return this._user;
}
CredentialStore.prototype.getPassword = function() {
  return this._password;
}
CredentialStore.prototype.getDatabase = function() {
  return this._database;
}
module.exports = CredentialStore;
