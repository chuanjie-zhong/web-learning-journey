(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function isObject(data) {
    return _typeof(data) === "object" && data !== null;
  }

  var Observer = /*#__PURE__*/function () {
    function Observer(value) {
      _classCallCheck(this, Observer);

      //  vue如果数据的层次较多，需要递归去解析对象的属性，依次增加set和get方法
      if (Array.isArray(value)) {
        //如果是数组的话并不会对索引进行观测，因为会导致性能问题
        //前端开发中很少去操作索引 push shift unshift
        //如果数组里放的是对象我再监控
        this.observerArray(value);
      } else {
        this.walk(value); //对对象进行观测
      }
    }

    _createClass(Observer, [{
      key: "observerArray",
      value: function observerArray(value) {
        value.forEach(function (key) {
          return observe[key];
        });
      }
    }, {
      key: "walk",
      value: function walk(data) {
        var keys = Object.keys(data); //[anme,age,address]

        keys.forEach(function (key) {
          defineReactive(data, key, data[key]); //定义响应式数据
        });
      }
    }]);

    return Observer;
  }();

  function defineReactive(data, key, value) {
    observe(value); //通过递归实现深度遍历

    Object.defineProperty(data, key, {
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        if (newValue === value) return;
        observe(newValue); // 继续劫持用户设置的值，因为用户设置的值是对象

        value = newValue;
      }
    });
  }

  function observe(data) {
    var isobj = isObject(data);

    if (!isobj) {
      return;
    }

    return new Observer(data); //用来观测数据
  }

  function initState(vm) {
    var opts = vm.$options;
    console.log(opts); // vue的数据来源 属性 方法 数据 计算属性 watch
    // if(opts.props){
    //     initProps(vm)
    // }

    if (opts.props) ;
    if (opts.methods) ;
    if (opts.data) initData(vm);
    if (opts.computed) ;
    if (opts.watch) ;
  }

  function initData(vm) {
    // 数据初始化工作
    var data = vm.$options.data; // 用户传递的data

    data = vm._data = typeof data === 'function' ? data.call(vm) : data; // console.log(data)
    // console.log(vm)
    //对象劫持，用户改变了数据 我希望得到通知 ==》 刷新页面
    //MVVM模式 数据变化可以驱动试图变化
    // Object.defineProperty () 给属性增加get方法和set方法

    observe(data); //响应式原理
  }

  function initMixin(Vue) {
    //初始化流程
    Vue.prototype._init = function (options) {
      // console.log(options)
      // 数据的劫持
      var vm = this; // vue中使用 this.$options 指代的就是用户传递的属性

      vm.$options = options; //初始化状态

      initState(vm);
    };
  }

  function Vue(options) {
    //进行Vue的初始化操作
    this._init(options);
  } // 通过引入文件的方法，给Vue原型添加方法


  initMixin(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map
