//7-3 File System Module , synchronous vs asynchronous

const fs = require("fs")
// console.log(fs) 

//reading a file text
// const readText = fs.readFileSync("./text/read.txt")
const readText = fs.readFileSync("./text/read.txt","utf-8")
console.log(readText)

//writing a text

const writeText = fs.writeFileSync("./text/write.txt",readText+"Hello world Hello world Hello worldHello world Hello world");
console.log(writeText)
