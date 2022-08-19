let Promise = require('./2.promise--手写')
let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // console.log(1);
        // reject('失败')
        resolve('成功')
        // throw new Error('失败')
    }, 1000);
})

// 1.promise调用then方法时可能当前的promise并没有成功 pending
// 2.发布订阅模式，如果当前的状态是pending时，我们需要将成功的回调和失败的回调存放起来，然后调用resolve和reject的时候重新执行

promise.then((data)=>{
console.log('success',data)
},(err)=>{
    console.log('falid',err)
})

// console.log(2)