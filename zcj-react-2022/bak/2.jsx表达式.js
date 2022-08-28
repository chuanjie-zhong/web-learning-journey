// import React from "react";
import ReactDOM from "react-dom";

/**
 * 1.JSX表达式  表达式是变量  常量  操作符 混合在一起的组合
 * 表达式是可以计算的，而且肯定会有一个返回值
 * class ==> className for ==>htmlFor
 */
let title = 'hello';
let style = {backgroundColor:'red'}
let element  = <h1 style={style} className="active">hello</h1>
ReactDOM.render(element, document.getElementById("root"));
