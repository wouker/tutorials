//current file executing
console.log(__filename);
//dir curr file executing resides in
console.log(__dirname);

function printHello(){
    console.log('Computer says hello');    
}

//global timeout func - ms - 1 time
var t = setTimeout(printHello, 2000);

//clearTimeout(t); //clear timer (nothing will be printed in this scenario)

//interval - ms - n times
setInterval(printHello, 2000);
