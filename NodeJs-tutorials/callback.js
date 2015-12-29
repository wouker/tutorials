var fs = require('fs');

//var data = fs.readFileSync('input.txt'); //blocking

var data = fs.readFile('input.txt', function(err,data){
    if(err) {
      console.log(err.stack);
      return;
    }
    console.log(data.toString());
}); //non-blocking

console.log('Program Ended');