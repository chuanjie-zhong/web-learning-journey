/**
 * call的特点：
 * 1)  可以改变我们当前函数的this 指向
 * 2)  还会让当前函数执行
 */

function fn1() {
  console.log(this,arguments);
}
function fn2() {
  console.log(this,arguments);
}

Function.prototype.call = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(`arguments[${i}]`);
  }
  //利用数组的tostring的特性
  let r = eval(`context.fn(${args})`);
  delete context.fn;
  return r;
};

fn1.call('hello',[1,2,3])
fn1.call.call.call(fn2)

// 如果多个call会让call方法执行  并且把call中this改变成fn2
