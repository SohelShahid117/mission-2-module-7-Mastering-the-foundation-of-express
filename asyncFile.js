const fs = require("fs")
// console.log(fs)
// const readFile2 = fs.readFile("./text/read.txt")
// console.log(readFile2) // throw new ERR_INVALID_ARG_TYPE(name, 'Function', value);

// fs.readFile("./text/read2.txt",(err,data)=>{
// fs.readFile("./text/read.txt",(err,data)=>{
fs.readFile("./text/read.txt","utf-8",(err,data)=>{
    if(err){
        throw Error("error reading text.here shows err.solve it")
    }
    console.log(data)

    fs.writeFile("./text/write2.txt",data,"utf-8",(err)=>{
        if(err){
            throw Error ("error here.Expert how in MERN path");
        }
        console.log("hello" + data)
    })
})