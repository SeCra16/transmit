/**
 * Created by sgolovine on 11/25/16.
 */
// File will get any associated metadata about the file
var mime = require('mime');
var fs = require("fs");
var CredentialStore = require('../lib/store/credentialStore');
var DatabaseTools = require('../lib/dbutils');

var Metadata = function(fullpath, id) {
    this._fullpath = fullpath;
    this._id = id;

};

Metadata.prototype.setData = function() {
    var lid = this._id;
    var cstore = new CredentialStore();
    var dbutils = new DatabaseTools(cstore);
    var mtype = mime.lookup(this._fullpath);
    console.log(mtype);
    dbutils.fk_insert('file_metadata', 'file_type', mtype, 'timestamp', lid);
    fs.stat(this._fullpath, function(err, stats) {
        dbutils.update('file_metadata', lid, 'file_size', stats.size);
      //  dbutils.fk_insert('file_metadata', 'file_size', stats.size, 'timestamp', this._id);
    });
};

module.exports = Metadata;