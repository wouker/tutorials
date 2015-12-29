var fs = require('fs');
var data = 'The text I want to write...';

//create stream to write
var writerStream = fs.createWriteStream('output.txt');
//write the data to the stream
writerStream.write(data);
//end
writerStream.end();

writerStream.on('finish', function() {
    console.log('output written');
})

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");