//多个异步请求，如何同时获得最终结果

let fs = require('fs');

let school = {}

function after(times,callback) {
    return function () {//闭包函数  函数的定义的作用域和函数执行的作用域，不在同一个作用域下
        if(--times===0){
            callback();
        }
    }
}

const cb = after(2,function () {
    console.log(school)
})

fs.readFile('./name.txt','utf8',function (err,data) {
    school.name = data;
    cb()
})
fs.readFile('./age.txt','utf8',function (err,data) {
    school.age = data
    cb()
})