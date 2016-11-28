/**
 * Created by sgolovine on 11/12/16.
 */
// filer.js will take the data from the UI and send it to the DB
// will also handle other modules under it to ensure data delivery

var RealPath = require('./realpath');
var FakePath = require('./fakepath');
var Timestamp = require('./timestamp');
var FilenameStore = require('../lib/store/filenameStore');
var Metadata = require('./meta');

var Filer = function(fstoreInstance) {
    this._fstore = fstoreInstance;

};


Filer.prototype.setTimestamp = function() {
    var filename = this._fstore.getFilename();
    var fullpath = this._fstore.getFullpath();
    var timestamp = new Timestamp();
    timestamp.setTimestamp(function(id){
        Filer.setRealPath(id, filename);
        Filer.setFakePath(id);
        Filer.setMetadata(fullpath, id);
    });
};
Filer.setFakePath = function(id) {
    var fakepath = new FakePath();
    fakepath.setPath(id);
};
Filer.setRealPath = function(id, filename) {
    var realpath = new RealPath();
    realpath.setPath(id, filename);
};
Filer.setMetadata = function(filename, id) {
    var meta = new Metadata(filename, id);
    meta.setData();
};


module.exports = Filer;