var fs = require("fs");

//async read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log('Async read: ' + data.toString());
});

//sync read
var data = fs.readFileSync('input.txt');
console.log('syn read: ' + data.toString());

console.log("Program Ended");