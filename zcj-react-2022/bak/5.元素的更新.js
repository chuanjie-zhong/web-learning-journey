// import React from "react";
import ReactDOM from "react-dom";

/**
 * 元素的更新
 * react元素本身是不可变的(创建以后不可修改，不可添加，不可删除)
 */

let element =<h1 id='title'>hello</h1>

ReactDOM.render(element(), document.getElementById("root"));


