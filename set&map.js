// set / map 是两种存储结构

// set 集合 不能重复的东西

let s = new Set([1,3,4,1,2,3,4])
console.log(s); // 基础类型 string number Boolean object symbol
s.add('5');// 添加
s.delete('5');//删除
s.values;


// Promise Symbol.iterator
// let arr = [...s];
// console.log(arr)

let s01 = [1,2,3,1,2]
let s02 = [3,4,5,1,2]
//集合 并集 交集 差集

//并集
function union(one,two) {
    let s1 = new Set(one);
    let s2 = new Set(two);
    return [...new Set([...s1,...s2])];
}
console.log(union(s01,s02),'并集')
// 交集
function intersection(one,two) {
    // 返回true表示留下
    return [...new Set(one)].filter((item)=>new Set(two).has(item))
}
console.log(intersection(s01,s02),'交集')
// 差集
function diff(one,two) {
    // 返回true表示留下
    return [...new Set(one)].filter((item)=>!new Set(two).has(item))
}
console.log(diff(s01,s02),'差集')


// map 是有key的,不能放重复的


let m = new Map();
let n = new WeakMap();//weakmap的key必须是对象
m.set('name','zcj');
let objs = {name:1}
m.set(objs,'123');// 这个objs空间被set所引用
m.set(objs,'123');
objs=null;// 把objs清空但是空间还在
console.log(objs)
console.log(m)
console.log(n)



