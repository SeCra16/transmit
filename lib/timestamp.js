/**
 * Created by sgolovine on 11/10/16.
 */
var datetime = require('node-datetime');

var Timestamp = function() {
    this._dt = datetime.create();
};

Timestamp.prototype.getTimestamp24 = function() {
    var timestampFormat = this._dt.format('m/d/Y H:M');
    return timestampFormat;
};
Timestamp.prototype.getTimestamp12 = function() {
    var timestampFormat = this._dt.format('m/d/Y I:M');
    var helperFormat = this._dt.format('H');
    if (helperFormat > 12) {
        return timestampFormat + " PM";
    } else {
        return timestampFormat;
    }
};
Timestamp.prototype.getDate = function() {
    var timestampFormat = this._dt.format('m/d/Y');
    return timestampFormat;
};
Timestamp.prototype.getMonth = function() {
    var timestampFormat = this._dt.format('m');
    return timestampFormat;
};
Timestamp.prototype.getDay = function() {
    var timestampFormat = this._dt.format('d');
    return timestampFormat;
};
Timestamp.prototype.getYear = function() {
    var timestampFormat = this._dt.format('Y');
    return timestampFormat;
};
Timestamp.prototype.getTime24 = function() {
    var timestampFormat = this._dt.format('H:M:S');
    return timestampFormat;
};
Timestamp.prototype.getTime12 = function() {
    var timestampFormat = this._dt.format('I:M:S');
    var helperFormat = this._dt.format('H');
    if (helperFormat > 12) {
        return timestampFormat + " PM";
    } else {
        return timestampFormat;
    }
};
Timestamp.prototype.getTimeNoSeconds24 = function() {
    var timestampFormat = this._dt.format('H:M');
    return timestampFormat;
};
Timestamp.prototype.getTimeNoSecond12 = function() {
    var timestampFormat = this._dt.format('I:M');
    var helperFormat = this._dt.format('H');
    if (helperFormat > 12) {
        return timestampFormat + " PM";
    } else {
        return timestampFormat;
    }
}
Timestamp.prototype.getHour24 = function() {
    var timestampFormat = this._dt.format('H');
    return timestampFormat;
};
Timestamp.prototype.getHour12 = function() {
    var timestampFormat = this._dt.format('I');
    var helperFormat = this._dt.format('H');
    if (helperFormat > 12) {
        return timestampFormat + " PM";
    } else {
        return timestampFormat;
    }
};
Timestamp.prototype.getMinute = function() {
    var timestampFormat = this._dt.format('M');
    return timestampFormat;
};
Timestamp.prototype.getSecond = function() {
    var timestampFormat = this._dt.format('S');
    return timestampFormat;
};
module.exports = Timestamp;
