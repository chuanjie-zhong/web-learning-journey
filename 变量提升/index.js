// js 中的作用域  全局  函数  eval
// js作用域是静态的  定义产生
// 执行函数时  执行上下文 EC


// 全局上下文，函数上下文

// 变量对象  Variabl object Vo  作用域链  this

// Vo  全局上下文中  var a = 1

// var a = 100;
// function sum() {
    
// }

// void(globalContext){
//     a:100,
//     sum : ref to function sum
// }

// this.a ===Vo.a;


// 执行上下文的周期  分为创建阶段以及代码执行阶段

// VO+arguments=>AO
function sum(a,b) {
    var c = 10;
    var d = function(){};
    function total(){}
    b=10
}

sum(10)

/**
 * 1.找形参，没有实参  那就用undefined来代替
 * 2。会查找函数声明
 * 3.变量声明
 */

// vo(sum){
//     a:10,
//     b:undefined,
//     total:ref to function total,
//     d:undefined
// }