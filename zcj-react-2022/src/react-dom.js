/**
 * 
 * @param {*} type 类型
 * @param {*} config 配置对象
 * @param {*} children 第一个儿子
 * @returns 
 */
function createElement(type, config, children) {
  let props = { ...config };
  if (arguments.length > 3) {//如果参数大3个，说明有多个儿子
    children = Array.prototype.slice.call(arguments, 2);
  }
//   children可能是一个字符串，也可能是一个数字，也可能是一个null undefined 也可能是一个数组
  props.children = children;
  return {
    type,
    props,
  };
}

const React = {
  createElement,
};

export default React;
