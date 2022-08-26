//node 全局对象  global  默认可以直接使用不用声明的对象

// console.log(this); //默认文件中的this  是被修改过的

console.log(Object.keys(global))
//process 进程
// Buffer 缓存区  存储二进制  16进制
// clearTnterval
// clearTimeout
// setInterval
// setTimeout
// claerImmediate
// setImmediate node中

// node中的事件环 node 10以前和浏览器不一样  node11之后表现形式一样

//(主模块)执行顺序是不一定的  看电脑性能
// setImmediate(()=>{
// console.log('setImmediate')
// })

// setTimeout(() => {
//     console.log('setIimeout')
// }, 0);

//timers(serTimeout) poll 放的I/O操作 如果没有check 会阻塞在着等定时器到达时间  check 如果有check 会在轮训完毕后立即执行


//取代的promise

Promise.resolve().then((data)=>{
    console.log(data)
})

process.nextTick(()=>{//nextTick优先于promise
console.log('nexyTick')
})


//node < 10

// 现在的版本就是清空一个宏任务 就清空微任务  以前的版本是等待整个队列执行后再清空微任务

