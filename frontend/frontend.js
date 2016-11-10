var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/upload', function(req, res) {

//    Create a new incoming form object
    var form = new formidable.IncomingForm();

//    Specify multiple uploads
    form.multiples = true;

//    Store all uploads in the uploads folder
    form.uploadDir = path.join(__dirname, '/uploads');

//    Every time a file has been uploaded sucessfully
//    rename it to the original name
    form.on('file', function(field, file){
        fs.rename(file.path, path.join(form.uploadDir, file.name));
    });

//    log any errors that occur
    form.on('error', function(err){
       console.log(`An error has occured: ${err}`);
    });

//    Send response to client on completion
    form.on('end', function(){
       res.end('success');
    });

//    Parse the incomming request containing the form data
    form.parse(req);

});

// Run the server
var server = app.listen(3000, function(){
   console.log("Server is running on port 3000");
});

