// 数组的方法 es5 forEach reduce map filter some every
// es6 find findIndex
// es7 includes

// 求和

// const r =[1,2,3,4,5].reduce((a,b)=>{
//     return a+b;
// },0)

// console.log(r)

// reduce 常见的用法 多个数据最终变成一个数据
// let keys = ['name','age'];
// let values = ['zcj',18];

// let obj = keys.reduce((a,b,index)=>{
//     a[b]=values[index];
//     return a
// },{});
// console.log(obj);

//reduce  redux compose 方法 (组合多个函数)

function sum(a,b) {
    return a+b;
}
function toUpper(str) {
    return str.toUpperCase();
}
function add(str) {
    return `***${str}***`;
}
// function compose(...fns) {
//     return function(...args) {
//         let lastFn = fns.pop();
//         // console.log(lastFn)
//         return fns.reduceRight((a,b)=>{
//             return b(a)
//         },lastFn(...args))
//     }
// }
// compose 的简写
// let compose = (...fns)=>(...args)=>{
//     let lastFn = fns.pop();
//     // console.log(lastFn)
//     return fns.reduceRight((a,b)=> b(a),lastFn(...args))
// }

// compose的另外一种写法(多思考)
// let compose = (...fns)=>{
//     return fns.reduce((a,b)=>{
//         console.log(a)
//         return (...args)=>{
//             // console.log(a)
//             return a(b(...args))
//         }
//     })
// }

// let r = compose(add,toUpper,sum)('zcj','lsy')
// console.log(r)


// 重写数组中的reduce

// Array.prototype.reduce=function(callback,prev){
//     //this=当前数组
//     for (let i = 0; i < this.length; i++) {
//         const current = this[i];
//         if(prev===undefined){
//            prev= callback(this[i],this[i+1],i+1,this);
//            i++;
//         }else{
//             prev = callback(prev,this[i],i,this)
//         }
//     }
//     return prev;
// };

// let r = [1,2,3].reduce((a,b)=>a+b)
// console.log(r)

//map 映射 filter some every.
let newArr = [1,2,3].map(item=>item*2)
[1,2,3].filter(item=>item!=2)
[1,2,3].some(item=>item==5)
[1,2,3].every(item=>item==1)
[1,2,3].find(item=>item==2)
// [1,2,3].indexOf(1)>-1 ==> [1,2,3].includes(2)  true
