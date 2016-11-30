/**
 * Created by sgolovine on 11/30/16.
 */
// filenameStore.js
// Intended to store the parent directory and file path of the uploaded file from the UI

var FilenameStore = function() {
    this._filename = 'empty';
    this._directory = 'empty';
    this._fullpath = 'empty';
};


// Should not be used
FilenameStore.prototype.setFilename = function(filename) {
    this._filename = filename;
};
FilenameStore.prototype.setDirectory = function(directory) {
    this._directory = directory;
};
FilenameStore.prototype.setFullpath = function(fullpath) {
    this._fullpath = fullpath;
};
FilenameStore.prototype.setAll = function(filename, directory, fullpath) {
    this._filename = filename;
    this._directory = directory;
    this._fullpath = fullpath;
};

FilenameStore.prototype.getFilename = function() {
    return this._filename;
};
FilenameStore.prototype.getDirectory = function() {
    return this._directory;
};
FilenameStore.prototype.getFullpath = function() {
    return this._fullpath;
};

module.exports = FilenameStore;