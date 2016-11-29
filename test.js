/**
 * Created by sgolovine on 11/28/16.
 */

var urlParse = require('./lib/requestParser');

var urlParseInstance = new urlParse('/f/sn6mF');

var urlpart = urlParseInstance.trimURL()
urlParseInstance.lookup(urlpart, function(value) {
    console.log(value);
});
