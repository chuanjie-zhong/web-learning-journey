let fs = require('fs');


function read(filename) {
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,'utf8',(err,data)=>{
            resolve(data)
        })
    })
}

// promise 成功或失败的回调的返回值，可以传递到外层的下一个then
// 如果返回的时普通值的话(传递到下一次的成功中)，出错的情况下(一定会走到下一次的失败)，可能还有promise的情况(会采用promise状态，决定下一次的成功还是失败)
// 错误处理，如果离自己最近的then 没有错误处理(没有写处理函数) 回向下找
// 每次执行完promise.then方法后返回的都是一个'新的promise'
read('../../name.txt').then((data)=>{ //链式调用解决回调地狱的问题
    console.log(data)
    return read(data)
}).then((data)=>{
console.log(data)
},(err)=>{
console.log(err)
})


//回调地狱
// error first 错误第一 异步方法无法通过try，catch捕获异常
// fs.readFile('./name.txt','utf8',(err,data)=>{
//     fs.readFile(data,'utf8',(err,data)=>{
//         console.log(data)
//     })
// })