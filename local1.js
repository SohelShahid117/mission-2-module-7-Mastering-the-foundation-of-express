const add = (param1,param2)=>{
    return param1+param2
}
console.log(add(2,3))
console.log(add("hi","hello"))
// console.log(module)
// console.log(module.exports)

// module.exports=add;
module.exports={add};