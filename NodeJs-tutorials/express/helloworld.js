var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('request received');
    res.send('Hello world!');
});

var server = app.listen(8081, function () {
    var address = server.address();
    var host = address.address;
    var port = address.port;

    console.log('example app listening at http://%s:%s', host, port);
});