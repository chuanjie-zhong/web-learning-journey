//typeof 和 instanceOf的区别

// 1) typrof es6中 typeof null === 'object'

//2) []  {}

// console.log(typeof [])
// console.log(typeof new RegExp('/A/'))
// console.log(typeof function(){})//typeof 如果是函数就返回函数

/**
 * Object.prototype.toString缺点是不能辨别自定义的类型(如下所示)
 */
// class A {}
// let a = new A()
// console.log(Object.prototype.toString.call(a))


// instanceOf

// console.log([] instanceof Array)
// console.log([] instanceof Object)


// console.log([].__proto__ === Array.prototype)
// console.log([].__proto__.__proto__ === Object.prototype)

class A {}
let a = new A()
function instanceOf(A,B) {
    B = B.prototype;
    A = A.__proto__;
    while (true) {// Object.prototype.__proto__
        if(A===null){
            return false
        }
        if(A===B){
            return true;
        }
        A = A.__proto__;
    }
}

console.log(instanceOf(a,Array))

//Symbol.hasInstance
console.log('hello' instanceof String) //等价于下面这种写法
console.log(String[Symbol.hasInstance]('hello'))

//重写Symbol.hasInstance方法
class ValidateStr {
    static [Symbol.hasInstance](x){
        return typeof x ==='string'
    }
}

console.log(ValidateStr[Symbol.hasInstance]('hello'))
