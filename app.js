// Express.js
var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var url = require('url');

var events = require('events');


var server = app.listen(3000, function(){
    console.log('Server listening on port 3000');
});

var io = require('socket.io').listen(server);

var urlParse = require('./lib/requestParser');
var Filer = require('./components/filer');
var FilenameStore = require('./lib/store/filenameStore');
var pathStore = require('./lib/store/PathStore');

var fileStore = new FilenameStore();
var filer = new Filer(fileStore);
var eventEmitter = new events.EventEmitter();


app.use(express.static(path.join(__dirname, 'frontend/public')));
app.get('/', function(req, res){

    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/f/*', function(req, res){
    //get the pathname
    var pathname = url.parse(req.url).pathname;
    var urlParseInstance = new urlParse(pathname);
    var filename = '';
    var urlpart = urlParseInstance.trimURL();
    urlParseInstance.lookup(urlpart, function(id) {
        urlParseInstance.getRealPath(id, function(filename) {
            // res.sendFile(path.join(__dirname, '/uploads/', filename));
            var file = __dirname + '/uploads/' + filename;
            res.download(file); // Set disposition and send it.
        });
    });
    // res.sendFile(path.join(__dirname, '/uploads/', filename));
});
app.post('/upload', function(req, res){

    // create an incoming form object
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '/uploads');

    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function(field, file) {
        fs.rename(file.path, path.join(form.uploadDir, file.name));
        fileStore.setAll(file.name, form.uploadDir, path.join(form.uploadDir, file.name));
    });

    // log any errors that occur
    form.on('error', function(err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
        // Test Functions, Remove Later
        // console.log("Success!");
        // console.log(fileUtils.getFilename());
        // console.log(fileUtils.getDirectory());
        // console.log(fileUtils.getFullpath());
        filer.setTimestamp();
    });

    // parse the incoming request containing the form data
    form.parse(req);

});

io.on('connection', function(socket){
    socket.on('submitted', function(){
       setTimeout(function(){
           io.emit('response', pathStore.path);
           console.log(`@from emitter: ${pathStore.path}`);
       }, 3000);
    });
});



// io.sockets.on('connection', function(socket){
//     socket.on('upload', pathStore.path);
// });
