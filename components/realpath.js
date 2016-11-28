/**
 * Created by sgolovine on 11/15/16.
 */
var CredentialStore = require('../lib/store/credentialStore');
var DatabaseTools = require('../lib/dbutils');

var RealPath = function() {
    this._credentialInstance = new CredentialStore();
    this._dbutils = new DatabaseTools(this._credentialInstance);
};

RealPath.prototype.setPath = function(id, filename) {
    var dbutils = this._dbutils;
    dbutils.fk_insert('true_directory', 'real_path', filename, 'timestamp', id);
};

module.exports = RealPath;