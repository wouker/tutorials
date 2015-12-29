var buf = new Buffer(256);
var str = "simple buffer learning string";
var len = buf.write(str);

console.log('Octets written: ' + len);
console.log('/******/');

/******/

len = 26;
buf= new Buffer(len);

for(var i = 0; i < len ; i++){
    buf[i] = i + 97;        
}

console.log('to string default (=utf8): ' + buf.toString());
console.log('to string ascii: ' + buf.toString('ascii'));
console.log('to string ascii - 0 to 5: ' + buf.toString('ascii',0,5));
console.log('to string utf 8 - 6 to 20: ' + buf.toString('utf8',6,20));
console.log('/******/');

/******/

buf = new Buffer(str);
var json = buf.toJSON();
console.log('buf.toJSON(): ' + json);
json = buf.toJSON(buf);
console.log('buf.toJSON(buf): ' + json);
console.log('/******/');

/******/

var buffer1=new Buffer('TutorialsPoint ');
var buffer2=new Buffer('Simple Easy Learning ');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('concat: ' + buffer3.toString());
console.log('/******/');

/******/

buffer1 = new Buffer('ABC');
buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2); //before, after or in same order

if(result < 0) {
    console.log(buffer1 + ' (buffer1) comes before ' + buffer2 + ' (buffer2)');
} else if(result > 0) {
    console.log(buffer2 + ' (buffer2) comes before ' + buffer1 + ' (buffer1)');
} else { //result==0
    console.log(buffer1 + ' (buffer1) has same order as ' + buffer2 + ' (buffer2)');
}
console.log('/******/');

/******/

buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log('content buffer 2 (copied from buffer1): ' + buffer2);
console.log('/******/');

/******/

buffer1 = new Buffer('TutorialsPoint');
buffer2 = buffer1.slice(0,9);
console.log('content buffer1 after slice (0-9): ' + buffer1);
console.log('content buffer2 after slice (0-9): ' + buffer2);
console.log('length of buffer2: ' + buffer2.length);