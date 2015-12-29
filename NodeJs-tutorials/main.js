//create http-instance
var http = require("http");

//create server
http.createServer(function(request,response){
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain' });
   
   // Send the response body as "Hello World"
   response.end('Hallo Lesly\n');   
}).listen(8081);

//let console print message
console.log('Server running at http://127.0.0.1:8081/');