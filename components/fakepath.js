/**
 * Created by sgolovine on 11/15/16.
 */

var credentialStore = require('../lib/store/credentialStore');
var dbutils = require('../lib/dbutils');
var randomstring = require('randomstring');



var FakePath = function() {

};

FakePath.prototype.setPath = function(id) {
    var url_string = randomstring.generate(5);
    var dbtools = new dbutils(new credentialStore());
    dbtools.contains('false_directory', 'fake_path', url_string, function(value){
        if (!value) {
            console.log('Inserting into DB');
            dbtools.fk_insert('false_directory', 'fake_path', url_string, 'timestamp', id);
        } else {
            FakePath.setPath(id);
        }
    });

};
module.exports = FakePath;