// Object.defineProperty 不支持数组的更新 push slice

let arr = [1,2,3]
let proxy = new Proxy(arr,{
    set(target,key,value){
        console.log(arguments)
    },
    get(){

    }
})

proxy[0]=100