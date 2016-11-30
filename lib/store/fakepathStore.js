/**
 * Created by sgolovine on 11/29/16.
 */
// Simple transport lib that stores the fake path after asssignment and delivers it back to the html

var store = 'foobar';

var getStore = function() {
};

getStore.prototype.getVar = function(){
    return store;
};

module.exports = getStore;