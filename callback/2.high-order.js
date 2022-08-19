// 函数柯里化  函数反柯里化


// 判断变量的类型
// 常用的判断类型的方法有四种：
// 1. 不能判断对象类型
// 2. constructor 可以找到这个变量是通过谁构造出来的
// 3. instanceof 判断谁是谁的实例
// 4. Object.prototype.toString.call() 缺陷就是不能细分谁是谁的实例

// function isType(type,value,) {
//     return Object.prototype.toString.call(value)===`[object ${type}]`
// }

//能不能讲方法进行细分

// function isType(type) {
//         return function (value) {
//             return Object.prototype.toString.call(value)===`[object ${type}]`
//         }
//     }

// let isArray = isType('Array')
// console.log(isArray(1),isArray([]))
//通过一个柯里化函数实现一个柯里化方法

function isType(type,value) {
    return Object.prototype.toString.call(value)===`[object ${type}]`
}
const curying = (fn,arr=[])=>{
    let len = fn.length;
    console.log(fn,len)
    return function (...args) {
        arr=[...arr,...args];
        if (arr.length<len) {
            return curying(fn,arr)
        } else {
            return fn(...arr)
        }
    }
}

let isArray = curying(isType)('Array')
console.log(isArray([]))
