var fs = require("fs");
var filePath = 'input.txt';

function handleError(err) {
    if (err) {
        console.error(err);
    }
}

function readFile(fd, close) {
    var buf = new Buffer(1024);

    console.log('********************')

    console.log('going to read the file.');
    fs.read(fd, buf, 0 /*offset buffer*/, buf.length /*length*/, 0 /*startposition file*/, function (err, bytes) {
        handleError(err);
        console.log(bytes + ' bytes read');

        if (bytes > 0) {
            //console.log("uncleaned: " + buf.toString()); 
            console.log("cleaned (buffersize only): " + buf.slice(0, bytes).toString());
        }
        
        //close file
        if (close) {
            closeFile(fd);
        }
    });
}

function truncateFile(fd) {

    console.log('********************')

    fs.ftruncate(fd, 10 /*len*/, function (err) {
        handleError(err);

        console.log("File truncated successfully.");
        readFile(fd, true); //throws error...
    });
}

function closeFile(fd) {

    console.log('********************')

    fs.close(fd, function (err) {
        handleError(err);
        console.log('file closed succesfully.');
        console.log('********************')

        console.log('repair file')
        fs.writeFile(filePath, 'Tutorials Point is giving self learning content\nto teach the world in simple and easy way!!!!!', function (err) {
            handleError(err);
            console.log('File repaired');
        });
    });
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
    
    //read file from stream(result of fs.open)
    readFile(fd);
    //truncate file
    truncateFile(fd);
});


console.log('********************')

//write into file
var filePath2 = 'input_edit.txt';

console.log('going to write into existing file ' + filePath2);
fs.writeFile(filePath, 'hey, I added text here!', function (err) {
    //overrides!
    handleError(err);
    console.log('Data written succesfully!');
    console.log('now we read:');
    fs.readFile(filePath2, function (err, data) {
        handleError(err);
        console.log('async read: ' + data);
    });
});



