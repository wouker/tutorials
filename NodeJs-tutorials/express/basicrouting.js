var express = require('express');
var app = express();

app.get('/',function(req,res){
   console.log('got a GET request for the homepage');
   res.send('Hello GET'); 
});

app.post('/',function(req,res){
   console.log('got a POST request for the homepage');
   res.send('Hello POST'); 
});

app.delete("/del_user", function(req,res){
    console.log('got a DELETE request for /del_user');
   res.send('Hello DELETE');
});

app.get("/list_user", function(req,res){
   console.log('got a GET request for /list_user');
   res.send('Page Listing'); 
});

app.get('/ab*cd', function(req,res){
   console.log('got a GET request for :qb|cd');
   res.send('Page Pattern Match'); 
});

var server = app.listen(8081,function(){
   var address = server.address();
   var host= address.address;
   var port=address.port;
   
    console.log("Example app listening at http://%s:%s", host, port);
});