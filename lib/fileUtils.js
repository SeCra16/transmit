/**
 * Created by sgolovine on 11/15/16.
 */
// Deletes files on the filesystem given the path.
var fs = require('fs');
var path = require('path');
var root = path.dirname(require.main.filename); // Gets the root directory

var FileUtils = function(dir) {
    this._dir = root + dir + '/';
};
FileUtils.prototype.delete = function(file) {
    var full_path = this._dir + file;
    fs.unlink(full_path, function(err){
        if (err) {
            throw err;
        }
        console.log(`Successfully deleted file: ${file}`);
    });
};

FileUtils.prototype.rename = function(file, newname) {
    var old_full_path = this._dir + file;
    var new_full_path = this._dir + newname;
    fs.rename(old_full_path, new_full_path, function(err) {
        if(err) {
            throw err;
        }
    });
};

module.exports = FileUtils;