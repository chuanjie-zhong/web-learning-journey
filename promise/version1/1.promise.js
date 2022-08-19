// promise 的特点以及概念
// https://promisesaplus.com/  promisea+ 规范 都是通过这个规范来实现的

// promise es6 内部已经实现了。 IE不支持promise, 需要polyfill es6-promise



/**
 * promise 为什么会产生
 * 1.解决异步问题
 */

// 1.多个异步请求并发(希望同步最终的结果) promise.all
// 2.链式异步请求的问题 上一个人的输出是下一个人的输入 Promise的链式调用可以解决着这个问题
// 3.缺陷：还是基于回调函数

let promise = new Promise((resolve,reject)=>{
    console.log(1);
    // reject('失败')
    // resolve('成功')
    throw new Error('失败')
})
promise.then((data)=>{
console.log('success',data)
},(err)=>{
    console.log('falid',err)
})

console.log(2)