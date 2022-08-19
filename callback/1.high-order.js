// 什么是高阶函数：
// 1 如果一个函数的参数是一个函数(回调函数是一种高阶函数)
// 2 如果一个函数返回一个函数，当前这个函数也是一种高阶函数


// 高阶函数的应用场景： 为了稍后写promise做铺垫


// 写一个业务代码，扩展当前的业务代码

function say(a) {
    console.log('say',a)
}
// 给某个方法 添加一个方法在他执行之前调用

Function.prototype.before=function (callback) {
    return  (...args)=>{//剩余运算符，箭头函数没有this，也没有arguments
        callback();
        this(...args);// 展开运算符
    }
}

let beforeSay = say.before(function () {
    console.log('before say')
})

beforeSay();
beforeSay('zcj');
