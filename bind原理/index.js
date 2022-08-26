let obj = {
  name: "zcj",
};

function fn(name, age) {
  console.log(this);
  console.log(this.name + "养了一只" + name + age + "岁了");
}

/**
 * bind方法可以绑定this的指向  绑定参数
 * bind方法返回一个绑定后的函数(高阶函数)
 * 如果绑定的函数被new了  当前函数的this就是当前的实例
 * new出来的结果可以找到原有类的原型
 */

Function.prototype.bind = function (context) {
  let that = this;
  let bindArgs = Array.prototype.slice.call(arguments, 1);
  function Fn(){};//Object.create原理
  function fBound() {//this
    let args = Array.prototype.slice.call(arguments);
    return that.apply(
      this instanceof fBound ? this : context,
      bindArgs.concat(args)
    );
  }
  Fn.prototype = this.prototype;
  fBound.prototype = new Fn();
  return fBound;
};

fn.prototype.flag = '哺乳类'

let bindFn = fn.bind(obj, "猫", 11);
let instance = new bindFn(9);
console.log(instance.flag)