// node 前端浏览器中js BOM DOM ECMASCRIPT
// 新增了很多模块  内置模块  核心模块

// commonjs规范
// 模块系统 1) 如何使用一块模块 2)如何定义一个模块 3) 如何导出一个模块


// 模块的分类  node 自定义模块(开头都有路径)  内置模块  第三方模块

// console.log(arguments)

// 模块化的作用 1) 命名冲突 2) 方便维护
/**
 * 1)可以通过对象的方式实现模块化  缺陷就是每次调用的时候  增加前缀
 * 2)给当前的内容增加一个函数
 */

const str = require('./a');

// 1) 要先将./a的文件转化为绝对路径
// 2) 读取这个文件，需要增加一个函数  函数内部都需要返回module。exports
// 3) 让函数执行





// path  专门用来处理路径的  fs 文件系统操作文件  VM  虚拟机模块

const path = require('path');
// console.log(__dirname,process.cwd())
console.log(path.resolve(__dirname,'a'));//解析的绝对路径
console.log(path.join(__dirname,'a','/'));//解析的绝对路径
console.log(path.dirname(__dirname)) // 取父路径
console.log(path.basename('1.js','.js'))
console.log(path.extname('1.min.js'))
// 一般会用path.resolve  遇到/ 的时候会用join


// fs
let fs = require('fs')
// fs中的方法一般是同步和异步组成  require方法是同步的
// 读取文件一般采用绝对路径

// 同步方法，只要是node中读取文件，不存在发生异常
let r = fs.readFileSync(path.resolve(__dirname,'a.js'),'utf8',(err,data)=>{
    return data
})
console.log(r)


let flag = fs.existsSync(path.resolve(__dirname,'a.js'))

console.log(flag)


// 读取的文件是什么格式
// 我怎么让字符串执行 function(){}

// 1) eval  模块的特性是保持独立

// let a = 1;
// eval("console.log(a)") // 不干净的执行

// // 2) new function  模板引擎  会采用newFunction的形式
// let b = "console.log(a)";
//  let fn = new Function(b)
//  console.log(fn())

let vm = require('vm')
let a= 1
vm.runInThisContext('console.log(a)')