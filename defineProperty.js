// Object.defineProperty

// 通过Object.defineProperty定义属性，可以增加拦截器
// let obj = {};
// let other=''
//不可枚举
// Object.defineProperty(obj,'name',{
//     enumerable:true,//是否可枚举
//     configurable:true,//是否可以删除属性
//     // writable:true,//是否可以重写 如果设置getter或setter就不能设置writable
//     // value:'hello',
//     get(){ // 读取方法
//         console.log('------');
//         return other;
//     },
//     set(val){// 设置方法
//         other = val
//     }

// })
// console.log(obj)

// 以上简写
// let obj = {
//     other:'123',
//     get name(){
//         return this.other
//     },
//     set name(val){
//         this.other = val;
//     }
// }

// 对象的setter和getter

//vue的数据劫持 (把所有的属性都改为get和set方法)

function updata() { //模拟的更新方法
    console.log('更新视图')
}

let data = {
    name:'zcj',
    age:18,
    address:{
        location:'成都'
    }
}

function observer(obj) {// Object.defineProperty只能用在对象上(数组也识别不了)
    if (typeof obj !== 'object') return obj;
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            defineReactive(obj,key,obj[key]);
            
        }
    }
}

function defineReactive(obj,key,value) {
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            return value;
        },
        set(val){
            if(val!==value){
              observer(val);
            updata();
            value = val  
            }

        }
    })
}

observer(data);
// data.name='lsy'
data.address={
    location:'北京'
}
data.address.location='成都'
console.log(data.address)


//解决数组长度改变监听不到的问题(重写数组的方法)

let methods = ['push','slice','pop','sort','reverse','unshift'];
methods.forEach(method=>{
    //面向切片开发 装饰器
    let oldMethod = Array.prototype[method];
    Array.prototype[method]=function () {
        updata();
        oldMethod.call(this,...arguments)
    }

})


