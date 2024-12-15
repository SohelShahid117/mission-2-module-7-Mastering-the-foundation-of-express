//7-4 Event driven architecture, create your own events
const eventEmitter = require("events")
// console.log(eventEmitter);
const myEmitter = new eventEmitter();
// console.log(myEmitter)

//listener
myEmitter.on("birthday",()=>{
    console.log("happy birthday to u")
})
myEmitter.on("birthday",()=>{
    console.log("I sent a gift to u")
})
myEmitter.on("birthday",(gift)=>{
    console.log(`I sent a ${gift} to u`)
})
// myEmitter.emit("birthday")
myEmitter.emit("birthday","watch")