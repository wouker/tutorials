var fs = require('fs');
var zlib = require('zlib');

var reader = fs.createReadStream('input.txt');
var writer = fs.createWriteStream('auto_output.txt');

//exec reader and pipe result to writer
reader.pipe(writer);

reader.pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("Program Ended");
