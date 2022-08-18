// 装饰器可以修饰类  类的属性 类的原型上的方法

// 修饰的时候 就是把这个类  属性... 传递给修饰的函数
@flag('哺乳类')// 装饰器可传参，但是装饰器函数就跟着发生变化  @flag等同于flag('哺乳类')(Animal)
class Animal{
    @readonly
    PI = 3.14;
    name='xxx';// 实例上的属性  不是原型上的属性
    @before
    say(){
        console.log('说话')
    }
}
// 1) 类的静态属性
// function flag(constructor) {
//     constructor.type='哺乳类'
// }
// console.log(Animal.type)
//装饰器传参的写法
function flag(value) {
    return function(constructor) {
         constructor.type=value
    }
   
}
console.log(Animal.type)

// 2) 类的属性   (实例上的属性)
function readonly(target,property,descriptor) {
    descriptor.writable=false;//此自定义作用为PI不可改，改的话会报错
    // console.log(target == Animal.prototype);// 类的原型
}
let animal = new Animal();
// animal.PI=3.15// writable设置为false就不可更改，否则会报错

function before(target,property,descriptor) {
    // console.log(descriptor)
    let oldSay = descriptor.value;
    descriptor.value=function() {
        console.log('cefore');
        oldSay.call(target,...arguments)
    }
}
animal.say()

