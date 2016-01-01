var domain = require('domain');
var EventEmitter = require('events').EventEmitter;

var emitter1 = new EventEmitter();

//create domain 1
var domain1 = domain.create();
domain1.on('error', function(err){
   console.log('domain1 handled error: ' + err.message); 
});


//explicit binding
domain1.add(emitter1);
emitter1.on('error', function(err) {
   console.log('listener handled error: ' + err.message);
});

emitter1.emit('error', new Error('te be handled by listener'));
emitter1.removeAllListeners('error');
emitter1.emit('error', new Error('te be handled by domain1'));

//create domain 2
var domain2 = domain.create();
domain2.on('error', function(err){
   console.log('domain2 handled error: ' + err.message); 
});

//implicit binding
domain2.run(function(){
    var emitter2 = new EventEmitter();
    emitter2.emit('error', new Error('te be handled by domain2'));
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('Converted to exception. system crash imminent.'));