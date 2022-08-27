// 原型 prototype  原型链  __proto__
// 每一个函数都有一个prototype属性
// 每一个对象都有一个__proto__

function Animal() {
  this.type = "哺乳类";
}

console.log(typeof Animal.prototype);

let animal = new Animal();
// console.log(typeof animal);
// console.log(animal.__proto__===Animal.prototype);
// console.log(animal.__proto__.__proto__===Object.prototype);
// console.log(animal.__proto__.constructor===Animal);
// Object.prototype.__proto__最顶层的对象
// console.log(Object.prototype.__proto__)

// 特殊的   function object (可以充当对象也可以充当函数)

// console.log(Function.__proto__==Function.prototype)
// console.log(Object.__proto__ == Function.prototype)
// console.log(Object.__proto__ == Function.__proto__)

Animal.prototype.a = 2;

console.log("a" in animal);
console.log(animal.hasOwnProperty("a"));

// in 关键字会判断这个属性是否属于原型 或者实例上的属性
// hasOwnProperty只会判断属性是否存在在原型上
