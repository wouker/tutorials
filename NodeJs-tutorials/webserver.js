var http = require('http');
var fs = require('fs');
var url = require('url');

var plaintextContentHeader ={'Content-Type': 'text/html'};

//create server
http.createServer(function (request,response){
   
   //parse request containing file name
   var pathname = url.parse(request.url).pathname;
   console.log('request for '+ pathname + ' received.');
   
   //read requested file from filesystem
   fs.readFile(pathname.substr(1), function(err,data){
      if(err) {
          console.log(err);
          response.writeHead(404, plaintextContentHeader); //404 not found
      } else {
          //200 succes
       response.writeHead(200, plaintextContentHeader);
       response.write(data.toString());  
      }
      response.end(); //sends body
   });    
}).listen(8081);

console.log('server running at http://127.0.0.1:8081/');