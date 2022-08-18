"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// 装饰器可以修饰类  类的属性 类的原型上的方法
// 修饰的时候 就是把这个类  属性... 传递给修饰的函数
var Animal = flag(_class = /*#__PURE__*/function () {
  function Animal() {
    _classCallCheck(this, Animal);

    this.name = 'xxx';
  }

  _createClass(Animal, [{
    key: "say",
    value: // 实例上的属性  不是原型上的属性
    function say() {
      console.log('说话');
    }
  }]);

  return Animal;
}()) || _class;

function flag(constructor) {
  constructor.type = '哺乳类';
}

console.log(Animal.type);
