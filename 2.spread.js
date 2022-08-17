// ...展开运算符

// 把两个数组合并成一个数组
// 把两个对象合并成一个对象

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2]
// console.log(arr3)

// 深拷贝 （拷贝后无关） 浅拷贝 （拷贝后还有关）

// ... 只能拷贝一层
// let school = {name:'zcj'};
// let my = {age:{count:18}};
// let all = {...school,...my};
// my.age.count = 100;
// school.name='lsy';
// console.log(all);
// console.log(school)

// Object.assign=... 浅拷贝
// let obj = {name:'zcj',age:18};
// let newObj = Object.assign(obj);
// obj.name='lsy'
// console.log(newObj)

// 我们可以把对象先转换成字符串  再把字符串转换为对象
// 缺点：json方法不支持转换函数、undefined等类型
// let school = {name:'zcj',fn:function () {}};
// let my = {age:{count:18},name:'lsy'};
// let all = JSON.parse(JSON.stringify({...school,...my}));
// my.age.count=100;
// console.log(all);

//自己实现深拷贝的方法  （递归拷贝，要一层层拷贝）
// 掌握类型判断 typeof instanceof Object.prototype.toString.call constructor
function deepClone(obj,hash=new WeakMap()) {
    if(obj==null) return obj;
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    if(typeof obj !=='object') return obj;
    //要不是数组，要不是对象
    if(hash.has(obj)) return hash.get(obj);// 如果weakMap中有这个对象就直接返回
    let cloneObj = new obj.constructor;
    //如果是对象把他放在weakMap中，如果再拷贝这个对象，这个对象就已经存在，直接返回这个对象即可
    hash.set(obj,cloneObj);
   for (const key in obj) {
      // 实现深拷贝
    if (obj.hasOwnProperty(key)) {
      // 如果赋予的值是对象，我们就把这个对象放到weakMap中
       cloneObj[key] = deepClone(obj[key],hash);
    }
   }
   return cloneObj;
}
let obj = {age:18,couter:{con:11}}
obj.xxx = obj;
const newObj = deepClone(obj)
obj.couter.con=222
console.log(obj)
console.log(newObj)