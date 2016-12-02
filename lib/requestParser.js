/**
 * Created by sgolovine on 11/28/16.
 */

var dbutils = require('./dbutils');
var credentialStore = require('./store/credentialStore');

var requestParse = function(url) {
    this._url = url;
};
requestParse.prototype.trimURL = function() {
    var url = this._url;
    url = url.replace('/f/', '');
    return url;
};
requestParse.prototype.lookup = function(urlpart, callback) {
    var credentialInstance = new credentialStore();
    var dbtools = new dbutils(credentialInstance);
    dbtools.contains('false_directory', 'fake_path', urlpart, function(value){
        // if it's true then it contains the directory
        if(value) {
            dbtools.altselect('false_directory', urlpart, function(value) {
               callbackv(alue[0].id);
            });
        } else {
            console.log("value not found!!!");
        }
    });
};
requestParse.prototype.getRealPath = function(id, callback) {
    var credentialInstance = new credentialStore();
    var dbtools = new dbutils(credentialInstance);
    dbtools.select('true_directory', id, function(value) {
        callback(value[0].real_path);
    });
};

module.exports = requestParse;