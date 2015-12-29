//Import events module
var events = require('events');
//Create eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create event handler
var connectHandler = function connected() {
    console.log('connection succesful.');
    
    //fire received-event
    eventEmitter.emit('data_received');
};

//bind connect handler to event
eventEmitter.on('connection', connectHandler);

//create anonymous event handler for received and bind directly
eventEmitter.on('data_received', function(){
    console.log('data received succesfully');
});

//fire connected event (which should fire received-event in handler)
eventEmitter.emit('connection');

console.log('Program Ended.');