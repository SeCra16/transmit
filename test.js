/**
 * Created by sgolovine on 11/10/16.
 */

var Timestamp = require('./lib/timestamp.js');

var timeInstance1 = new Timestamp();

console.log(timeInstance1.getSecond());

setTimeout(function () {
    console.log(timeInstance1.getSecond());
},3000);