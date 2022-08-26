// 说一下js中类型转化的规则？

// if() true / false 为false的值  false undefined null '' 0 NAN

// 运算 + (字符串拼接的含义) - * 、 1/'a'
// console.log(1/'a')  ==>NaN


// 运算  字符串拼接(如果有一方是字符串就会转化成字符串拼接)
// 1)数字与非字符串相加  null相加为0 数字和undefined相加为NaN
// console.log(1+undefined) NaN
// console.log(1+{}) 1[object Object]

//2) 非数字相加

console.log(true+true)
// console.log(true+{})true[object Object]
// console.log(true+undefined) NaN

// 对象中有两个方法  valueOf  toString()
// 当true+obj时，他会先调用obj中的valueOf 如果valueOf返回{}时，才会调用toString
let obj ={
    valueOf(){
        return {}
    },
    toString(){
        return 200
    }
}
console.log(true+obj)


//比较运算 > = <

// console.log('a'.charCodeAt(0))
// console.log('b'.charCodeAt(0))
// console.log('a'<'b');//会转换ASCII 一般比较首字母

// console.log(1<'123');//如果可以 转化成字符串  如果不能转化成字符串 就返回false

// ==
console.log(null == undefined)
console.log(undefined == 0) //null和undefined 和其他类型比较都返回的是false
console.log({}=={})
console.log(NaN==NaN);//NaN和任何类型比较都不相等
// 字符串和数字比较  将字符串转化为数字
console.log('1'===1);
// 如果是Boolean类型  会把Boolean转化为数字
console.log(1==true);
// 对象和字符串、数字、symbol比较的时候  会把对象转换成基本数据类型
console.log({} == '[object Object]');


//[]==![] 单目运算优先级最高  
// [] == false
// [] == 0 //[].valueOf
// [] == 0 //[].toString() ''
// '' == 0 number('')
// 0 == 0
// 相等



