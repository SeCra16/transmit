/**
 * Created by sgolovine on 11/10/16.
 */
var datetime = require('node-datetime');
var StaticTimestamp = require('./staticTimestamp.js')

var Timestamp = function(){
    // console.log('Obj Created');
};


Timestamp.prototype.getTimestamp24 = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getTimestamp24();
};
Timestamp.prototype.getTimestamp12 = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getTimestamp12();
};
Timestamp.prototype.getDate = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getDate();
};
Timestamp.prototype.getMonth = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getMonth();
};
Timestamp.prototype.getDay = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getDay();
};
Timestamp.prototype.getYear = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getYear();
};
Timestamp.prototype.getTime24 = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getTime24();
};
Timestamp.prototype.getTime12 = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getTime12();
};
Timestamp.prototype.getTimeNoSeconds24 = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getTimeNoSeconds24();
};
Timestamp.prototype.getTimeNoSecond12 = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getTimeNoSecond12();
};
Timestamp.prototype.getHour24 = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getHour24();
};
Timestamp.prototype.getHour12 = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getHour12();
};
Timestamp.prototype.getMinute = function() {
    var timeInstance1 = new Timestamp();
    return timeInstance1.getMinute();
};
Timestamp.prototype.getSecond = function() {
    var staticTimeInstance = new StaticTimestamp();
    return staticTimeInstance.getSecond();
};
module.exports = Timestamp;
