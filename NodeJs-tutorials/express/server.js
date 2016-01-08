var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(urlencodedParser);
app.use(multer({ dest: 'tmp/' }).single('file'));

// app.get('/', function(req,res){
//    res.send('Hello World'); 
// });

app.get('/index.htm', function (req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
});

app.get('/post.htm', function (req, res) {
    res.sendFile(__dirname + "/" + "post.htm");
});

app.get('/upload.htm', function (req, res) {
    res.sendFile(__dirname + "/" + "upload.htm");
});

app.get('/process_get', function (req, res) {
    var response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, function (req, res) {
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

//upload doesn't seem to work anymore like this...
app.post('/file_upload', function (req, res) {
    var reqFile = req.files.file;
    console.log(reqFile.name);
    console.log(reqFile.path);
    console.log(reqFile.type);

    var uplFile = __dirname + "/" + reqFile.name;
    fs.readFile(reqFile.path, function (err, data) {
        fs.writeFile(uplFile, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                var response = {
                    message: 'File uploaded succesfully',
                    filename: reqFile.Name
                }
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081, function () {
    var address = server.address();
    var host = address.address;
    var port = address.port;

    console.log("Example app listening at http://%s:%s", host, port);
});