var http = require('http');

//options to be used by request
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
};

//callback to deal w response
var callback = function (response) {
    var body = '';
    response.on('data', function (data) {
        body += data; //cont. update of stream w data
    });
    
    response.on('end', function() {
       console.log(body); 
    });
}

//make serverrequest
var req = http.request(options, callback);
req.end();