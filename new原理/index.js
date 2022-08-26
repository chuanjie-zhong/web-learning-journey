function Animal(type) {
  this.type = type; //实例上的属性
  //如果当前构造函数返回的是一个引用类型  需要把这个对象返回
  return { name: "zcj" };
}

Animal.prototype.say = function () {
  console.log("say");
};

function mockNew() {
  // Constructor => animal 剩余的arguments就是其他的参数
  let Constructor = [].shift.call(arguments);
  let obj = {}; //返回的结果
  obj.__proto__ = Constructor.__proto__; //原型上的方法
  let r = Constructor.apply(obj, arguments);
  return r instanceof Object ? r : obj;
}

//  let animal = new Animal('哺乳类');
let animal = mockNew(Animal, "哺乳类");
console.log(animal.type);
animal.say();
