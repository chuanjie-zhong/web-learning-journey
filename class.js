// es6 类 es5 构造函数


// let a1 = new Animal('猴子');
// let a2 = new Animal('小鸡');
// console.log(a1.arr===a2.arr)
//每个实例都有一个__proto__ 指向所属类的原型
// console.log(a1.__proto__===a2.__proto__)
// console.log(a1.constructor===Animal)
// console.log(Animal.__proto__===Function.prototype)
// console.log(a1.__proto__.__proto__===Object.prototype)
// console.log(Object.prototype.__proto__)


//类的继承
function Animal(name) {
    //属性分为两种 实例上的属性 公有属性
    this.name=name;
    // this.arr = [1,2,3]
    this.eat = '吃肉'
}
Animal.prototype.address={location:'成都'}
function Tiger(name) {
    this.name=name;
    this.age=18;
    Animal.call(this);
}
//Tiger原型继承Animal原型
// Tiger.prototype.__proto__ = Animal.prototype;//第一种方法(等价于下面这种方法)
// Object.setPrototypeOf(Tiger.prototype,Animal.prototype) //ES7
Tiger.prototype= Object.create(Animal.prototype);//第二种方法(Object.create是es5方法)
//Object.create 的原理
// function creat(parentPrototype) {
//     let Fn = function(){}
//     Fn.prototype = parentPrototype;// 当前函数的原型只有父类的原型
//     let fn = new Fn();
//     fn.constructor = Tiger;
//     return fn;// 当前实例可以拿到animal.pototype
// }
// Tiger.prototype = new Animal();// 第三种方法，但是不能用 不能给父类传递参数
Tiger.prototype.say=function() {
    console.log('说话')
}

// 1)继承父类实例上的属性
let tiger = new Tiger();
console.log(tiger.eat)
console.log(tiger.address)

//  我们写的时候  call + Object.create  or  call + setProtypeOf