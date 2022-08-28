// import React from "react";
import ReactDOM from "react-dom";

/**
 * 老的版本里 只要用到jsx就需要引用到顶部react包
 * 新版本里就不需要
 * JSX  javascript+xml  html
 * JSX只是react团队提供的语法糖
 * react元素是构建react应用的最小单位，也就是所谓的虚拟DOM
 * 虚拟DOM
 */

// jsx在执行的时候其实是一个函数调用 ，他是一个创建元素的工厂函数
let element = <h1>hello</h1>
console.log(JSON.stringify(element,null,2))

// 所谓的渲染就是按照react元素所描述的结构，创建真实的DOM元素，并插入到容器内
// 会由ReactDOM来确保浏览器的真实DOM和虚拟DOM一致
// 现有房屋设计师出设计稿
// 然后由建筑工人按照图纸的要求，把真实房子盖到指定地点
ReactDOM.render(<h1>hello</h1>, document.getElementById("root"));


/**
 也就是所谓的虚拟DOM 其实就是一个普通的JS对象
 *jsx element= {
  "type": "h1",//元素的类型
  //"key": null,//是用来区分同一个父亲的不同儿子 diff
  //"ref": null,//可以用来获取真实DOM元素  ref
  "props": {//属性
    "children": "hello"
  },
  "_owner": null,
  "_store": {}
}
 */