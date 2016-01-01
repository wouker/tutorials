var fs = require('fs');

var dir = '/tmp/test';

function handleError(err) {
    if (err) {
        return console.error(err);
    }
}

//remove dir
console.log('going to delete dir /tmp/test');
fs.rmdir(dir, function (err) {
    handleError(err);
    read();
    create();
});

console.log('*********************');

//create dir
function create() {
    console.log('going to create dir temp/test'); //tmp must exist. will be created on root (= e:\ hier)
    fs.mkdir(dir, function (err) {
        handleError(err);
        console.log("Directory created successfully!");
        read();
    })
};


//read dir
function read() {
    console.log('going to read dir /tmp');
    fs.readdir('/tmp/', function (err, files) {
        handleError(err);
        files.forEach(function (file) {
            console.log(file);
        })
    })
};