
//我要重写数组的方法 7个  push  shift unshif pop reverse sort splice 会导致数组本身发生变化
// slice() 这样的方法就不需要劫持
 let oldArrayMethods = Array.prototype;

 // value.__proto__ = arraMethods Y原型链查找的问题，会上向查找，先查找我重写的，重写的没有会继续向上查找
 // arrayMethods.__proto__ = oldArrayMethods
export const arrayMethods = Object.create(oldArrayMethods)

const methods = [
    'push',
    'shift',
    'unshift',
    'pop',
    'srt',
    'splice',
    'reverse'
]
methods.forEach(method=>{
    arrayMethods[method]= function (...args) {
        console.log('用户调用了push方法'); // AOP 切片编程
        const result = oldArrayMethods[method].apply(this,args);// 调用原生的数组方法
        //push unshift 添加的元素可能还是一个对象
        let inserted;//当前用户插入的元素
        let ob = this.__ob__;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted=args;
                break;
            case 'splice'://3个  新增的属性 splice 有删除 新增的功能 arr.splice(0,1,{name:1})
                inserted = args.slice(2);
                break;
            default:
                break;
        }

        if(inserted){
            ob.observerArray(inserted);
        }

        return result;
    }
})