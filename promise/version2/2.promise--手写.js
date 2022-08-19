//1)promise 有三个状态： 成功态(resolve) 失败态(rejectd) 等待态(pending) (既不成功又不失败)
//promise 是一个类
//2) 用户自己决定失败的原因和成功的原因  失败和成功也是用户定义的
// 3)promise 默认执行器是立即执行
// 4)promise 的实例都有一个then方法， 一个是成功的回调，一个是失败的回调
//5)如果执行函数时发生了异常也会执行失败逻辑
//6) 如果promise一旦成功就不能失败，反之亦然(只有等待态的时候才能去更改状态)


const RESOLVE = 'RESOLVE';
const REJECTED = 'REJECTED';
const PENDING = 'PENDING';

class Promise {
    constructor(executor){
        this.status = PENDING;
        this.value=undefined;
        this.rejText = undefined;
        this.onSuccess = [];
        this.onReject = [];
        let resolve = (value)=>{
            if(this.status===PENDING){
            this.value=value;
            this.status=RESOLVE;
            //发布
            this.onSuccess.forEach((fn)=>fn(this.value))
            }
        }
        let reject=(rejText)=>{
            if(this.status===PENDING){
                this.rejText=rejText;
                this.status=REJECTED;
                //发布
                this.onReject.forEach((fn)=>fn(this.rejText))
            }
        }
        try {
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onsuccess,onerror){
        console.log('my promise')
        if(this.status===RESOLVE){
            onsuccess(this.value)
        }
        if(this.status===REJECTED){
            onerror(this.rejText)
        }
        if(this.status===PENDING){
            //订阅 pending的时候，把then的两个形参都存起来
            this.onSuccess.push(onsuccess)
            this.onReject.push(onerror)
            console.log('等待')
        }
    }
}

// let pro = new Promise((resolve,reject)=>{
//     reject('失败')
// resolve('成功')

// })
// pro.then((data)=>{
// console.log(data)
// },err=>{
// console.log(err)
// })
module.exports=Promise;