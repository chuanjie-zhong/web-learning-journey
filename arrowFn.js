// 箭头函数 没有this 没有arguments

// this的问题 看. 前面是谁，this就是谁
let a = 1;
let obj ={
   a:2,
   fn:()=>{
    setTimeout(() => {
        console.log(this.a)
    },);
   }
}
obj.fn()