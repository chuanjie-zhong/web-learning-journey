// Object.defineProperty 不支持数组的更新 push slice

function update() {
    console.log('更新视图')
}

let arr = [1,2,3];
// proxy可以监控到数组的变化及对象的变化
// 数组变化 会先改变数组，再改变数组长度
let proxy = new Proxy(arr,{
    set(target,key,value){
        // if(key==='length') return true
        // console.log(arguments)
        // update()
        // target[key] = value;
        if(key==='length') return true;// 因为数组变化会变化两次，所以会调用两次update方法，所以才有此判断语句
        update();
       return Reflect.set(target,key,value);// 等价于target[key] = value 好处在于在改变数组时不必考虑数组长度问题
    },
    get(target,key){
        // return target[key]
        return Reflect.get(target,key);// 同理等价于  return target[key]
    }
})

proxy[0]=100
console.log(proxy[0])