/**
 * Created by sgolovine on 11/10/16.
 */
var datetime = require('node-datetime');

var StaticTimestamp = function() {
    this._dt = datetime.create();
};

StaticTimestamp.prototype.getTimestamp24 = function() {
    var timestampFormat = this._dt.format('Y-m-d H:M:S');
    return timestampFormat;
};
StaticTimestamp.prototype.getTimestamp12 = function() {
    var timestampFormat = this._dt.format('Y-m-d I:M:S');
    var helperFormat = this._dt.format('H');
    if (helperFormat > 12) {
        return timestampFormat + " PM";
    } else {
        return timestampFormat;
    }
};
StaticTimestamp.prototype.getDate = function() {
    var timestampFormat = this._dt.format('Y-m-d');
    return timestampFormat;
};
StaticTimestamp.prototype.getMonth = function() {
    var timestampFormat = this._dt.format('m');
    return timestampFormat;
};
StaticTimestamp.prototype.getDay = function() {
    var timestampFormat = this._dt.format('d');
    return timestampFormat;
};
StaticTimestamp.prototype.getYear = function() {
    var timestampFormat = this._dt.format('Y');
    return timestampFormat;
};
StaticTimestamp.prototype.getTime24 = function() {
    var timestampFormat = this._dt.format('H:M:S');
    return timestampFormat;
};
StaticTimestamp.prototype.getTime12 = function() {
    var timestampFormat = this._dt.format('I:M:S');
    var helperFormat = this._dt.format('H');
    if (helperFormat > 12) {
        return timestampFormat + " PM";
    } else {
        return timestampFormat;
    }
};
StaticTimestamp.prototype.getTimeNoSeconds24 = function() {
    var timestampFormat = this._dt.format('H:M');
    return timestampFormat;
};
StaticTimestamp.prototype.getTimeNoSecond12 = function() {
    var timestampFormat = this._dt.format('I:M');
    var helperFormat = this._dt.format('H');
    if (helperFormat > 12) {
        return timestampFormat + " PM";
    } else {
        return timestampFormat;
    }
}
StaticTimestamp.prototype.getHour24 = function() {
    var timestampFormat = this._dt.format('H');
    return timestampFormat;
};
StaticTimestamp.prototype.getHour12 = function() {
    var timestampFormat = this._dt.format('I');
    var helperFormat = this._dt.format('H');
    if (helperFormat > 12) {
        return timestampFormat + " PM";
    } else {
        return timestampFormat;
    }
};
StaticTimestamp.prototype.getMinute = function() {
    var timestampFormat = this._dt.format('M');
    return timestampFormat;
};
StaticTimestamp.prototype.getSecond = function() {
    var timestampFormat = this._dt.format('S');
    return timestampFormat;
};
module.exports = StaticTimestamp;
