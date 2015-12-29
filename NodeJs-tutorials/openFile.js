var fs = require("fs");
var filePath = 'input.txt';

function handleError(err) {
    if (err) {
        console.error(err);
    }
}

//fileInfo
console.log('going to get file info')
fs.stat(filePath, function (err, stats) {
    handleError(err);
    console.log(stats);
    console.log('retrieved file info succesfully');

    console.log('isFile? ' + stats.isFile());
    console.log('isDirectory? ' + stats.isDirectory());
});


console.log('********************')

//async open file
console.log('going to open file');
fs.open(filePath, 'r+', function (err, fd) {
    handleError(err);
    console.log('file opened succesfully');
});
