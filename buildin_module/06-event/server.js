const  EventEmitter = require('events')

class myEvent extends EventEmitter{

}

const event = new myEvent()
event.on('play',(v) => {console.log(v)})
event.emit('play',111)