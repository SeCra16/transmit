/**
 * Created by sgolovine on 11/15/16.
 */


var staticTimstamp = require('../lib/timestamp/staticTimestamp');
var credentialStore = require('../lib/store/credentialStore');
var dbutils = require('../lib/dbutils');


var Timestamp = function(){};

Timestamp.prototype.setTimestamp = function(callback) {
    // var tid = 0;

    var dbtools = new dbutils(new credentialStore());
    var staticTimestampInstance = new staticTimstamp();
    var timestamp = staticTimestampInstance.getTimestamp24();
    var hour = staticTimestampInstance.getHour24();
    var minute = staticTimestampInstance.getMinute();
    var second = staticTimestampInstance.getSecond();
    var month = staticTimestampInstance.getMonth();
    var day = staticTimestampInstance.getDay();
    var year = staticTimestampInstance.getYear();
    dbtools.autoinsert('file_statistics', 'timestamp', timestamp, function(id){
        dbtools.update('file_statistics', id, 'hour', hour);
        dbtools.update('file_statistics', id, 'minute', minute); // minute
        dbtools.update('file_statistics', id, 'second', second); // second
        dbtools.update('file_statistics', id, 'month', month); // month
        dbtools.update('file_statistics', id, 'day', day); // day
        dbtools.update('file_statistics', id, 'year', year);
        callback(id);
    });



    // dbtools.autoinsert('file_statistics', 'timestamp', timestamp, function(id){

    //
    // });

};
module.exports = Timestamp;