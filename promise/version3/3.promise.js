const Promise = require('./2.promise--手写');


let promise = new Promise((resolve,reject)=>{
    resolve(1)
})

let p = promise.then(data=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('成功')
        }, 1000);
    })
})

p.then((data)=>{
console.log(data,222)
},(err)=>{
    console.log(err,111)
})
p.then().then(data=>{
    console.log(data,66)
})