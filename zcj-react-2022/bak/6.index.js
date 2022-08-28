// import React from "react";
import ReactDOM from "react-dom";

/**
 * react 只会更新改变的react元素
 */

let root = document.getElementById('root');
function tick() {
  const element = (
    <div>
      <p>时间</p>{new Date().toLocaleTimeString()}
    </div>
  )
  ReactDOM.render(element,root)
}
setInterval(() => {
  tick()
}, 1000);
