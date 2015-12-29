var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener #1
var listner1 = function listner1() {
    console.log("listner 1 executed");
}

//listener #2
var listner2 = function listner2() {
    console.log("listner 2 executed");
}

var countListeners = function () 
{   
    var eventListenersCount = events.EventEmitter.listenerCount(eventEmitter, 'connection');
    console.log(eventListenersCount + " Listner(s) listening to connection event.");
}

countListeners();

//bind connection event to both listeners - 'on' is same as 'addListener' 
eventEmitter.addListener('connection', listner1);
eventEmitter.on('connection', listner2);
console.log('adding listeners done.')

countListeners();

//fire event
eventEmitter.emit('connection');

//remove binding of 1
eventEmitter.removeListener('connection',listner1);
console.log('listner1 unlistened');

//fire event
eventEmitter.emit('connection');

countListeners();

console.log('Program Ended');