//js特点:   单线程  只能在同一时间内干一件事儿

//宏任务  js渲染 UI渲染   微任务 promise
// 肯定是宏任务先执行 因为script默认是个宏任务
//之后的执行过程都是先清空微任务再来执行宏任务
setTimeout(() => {
    console.log('time1')
    Promise.resolve().then(data=>{
        console.log('成功3')
    })
}, 0);
// setTimeout(() => {
//     console.log('time2')
// }, 0);
// setTimeout(() => {
//     console.log('time3')
// }, 0);

Promise.resolve().then(data=>{
    console.log('成功1')
    setTimeout(() => {
        console.log(111)
    }, 0);
})


console.log(1122)



//队列 先进先出 栈 先进后出

// function a() {
//     console.log('a')
//     function b() {
//         console.log('b')
//         function c() {
//             console.log('c')
//         }
//         c();
//     }
//     b()
// }
// a()