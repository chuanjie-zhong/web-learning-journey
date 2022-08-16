// var 要求全部改用const  let
// var声明的变量（污染全局变量）
// var a = 1;
// console.log(window.a)

// var 导致变量提升的问题
// console.log(a)
// var a = 1;

// var 可以被重复声明 let可以解决重复定义问题
// var a = 1;
// var a = 2;
// var a = 3;

// let作用域问题(常见的作用域: 全局作用域  函数作用域)
// {
//     var a = 1;
// }
// console.log(a);

//寻找a一般是先寻找自身作用域的，自身作用域没有再找外作用域
// let a = 100;
// {
//     console.log(a);//暂存死区
//     let a = 200;
// }

// for (let i = 0; i < 10; i++) {
//    setTimeout(() => {
//     console.log(i)
//    });
    
// }

// const 常量 不会变的量
// const PI = '3.14'
// PI='1'


