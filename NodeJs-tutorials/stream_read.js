var fs = require('fs');

//create readable stream
var readerStream = fs.createReadStream('input.txt');
//set encoding to utf8
readerStream.setEncoding('UTF8');

//listen to data-event on reader
var data ='';
readerStream.on('data', function(chunk){
    //console.log('data event catched. read ' + chunk);
    data += chunk;    
});

readerStream.on('end', function(){
    console.log('reader ended - result: ' + data);
});

readerStream.on('error', function(err){
   console.log('error: '+ err.stack); 
});

console.log('Program Ended.');