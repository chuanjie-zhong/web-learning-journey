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
  
  Function.prototype.apply = function (context,args) {
    context = context ? Object(context) : window;
        context.fn = this;

    if(args){
        return context.fn(args)
    }
    //利用数组的tostring的特性
    let r = eval(`context.fn(${args})`);
    delete context.fn;
    return r;
  };

  fn1.apply('hello')

