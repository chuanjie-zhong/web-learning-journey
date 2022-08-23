// 把data中的数据 都使用Object.defineProperty重新定义  es5
// Object.defineProperty 不能兼容IE8 及以下 vue2 无法兼容IE8版本

import { isObject, def } from "../util/index";
import { arrayMethods } from "./array.js";
class Observer {
  constructor(value) {
    //  vue如果数据的层次较多，需要递归去解析对象的属性，依次增加set和get方法
    //  value.__ob__ = this;// 我给监控过的对象都增加一个__ob__属性
    def(value, "__ob__", this);
    if (Array.isArray(value)) {
      //如果是数组的话并不会对索引进行观测，因为会导致性能问题
      //前端开发中很少去操作索引 push shift unshift
      //数组劫持不仅仅要劫持数组的每一项，还要重写数组里面的方法
      value._proto_ = arrayMethods;
      //如果数组里放的是对象我再监控
      this.observerArray(value);
    } else {
      this.walk(value); //对对象进行观测
    }
  }
  observerArray(value) {
    value.forEach((key) => observe[key]);
  }
  walk(data) {
    let keys = Object.keys(data); //[anme,age,address]
    keys.forEach((key) => {
      defineReactive(data, key, data[key]); //定义响应式数据
    });
  }
}

function defineReactive(data, key, value) {
  observe(value); //通过递归实现深度遍历
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      observe(newValue); // 继续劫持用户设置的值，因为用户设置的值是对象
      value = newValue;
    },
  });
}

export function observe(data) {
  let isobj = isObject(data);
  if (!isobj) {
    return;
  }
  return new Observer(data); //用来观测数据
}
