//local module

// const add = require('./local1')
// const myModule = require('./local1')
// console.log(add(99,87))
// console.log(add(44,55))

// console.log(myModule(22,33))
const {add}=require("./local1")
console.log(add(77,8))
// console.log(add)

const {a:a2,add:add2}=require("./local2")
console.log(add2(7,8,9))
console.log(a2)
// console.log(a)  //ReferenceError: a is not defined


//built in module
const path = require("path")
// console.log(path)
console.log(path.dirname)
console.log(path.dirname("C:/Programming Hero-Level2/Mission-2/mission-2-module-7-Mastering the foundation of express/index.js"))

console.log(path.parse("C:/Programming Hero-Level2/Mission-2/mission-2-module-7-Mastering the foundation of express/index.js"))

console.log(path.join("C:/Programming Hero-Level2/Mission-2/mission-2-module-7-Mastering the foundation of express","local1.js"))

//https://nodejs.org/api/path.html
//https://www.w3schools.com/nodejs/nodejs_filesystem.asp