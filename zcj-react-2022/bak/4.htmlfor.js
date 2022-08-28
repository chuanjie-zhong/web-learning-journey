// import React from "react";
import ReactDOM from "react-dom";

let element = ()=>{
  return <form>
    <label htmlFor="username">用户名</label>
    <input id='username'/>
  </form>
}

ReactDOM.render(element(), document.getElementById("root"));


