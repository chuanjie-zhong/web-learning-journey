//模板引擎 

// es6中模板字符串

let name= '钟传杰';
let age = 10;
let str = "${name}今年${age}岁了"

// replace 正则

str = str.replace(/\$\{(.+?)\}/g,function () {
    return eval(arguments[1])
})

console.log(str)


let ejs = require('ejs')//第三方模块