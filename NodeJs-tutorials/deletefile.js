var fs = require('fs');

console.log('going to delete an existing file');
fs.unlink('input_todelete.txt', function(err){
    if (err) {
       return console.error(err);
   }
   console.log("File deleted successfully!");  
});