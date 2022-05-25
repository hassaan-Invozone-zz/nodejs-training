const EventEmitter = require('events');
const emitter = new EventEmitter();


//register a listener

emitter.on('test', data=>{
    console.log(data)
})


//rise an event
emitter.emit('test','234234');
