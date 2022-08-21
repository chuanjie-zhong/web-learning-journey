//1)promise 有三个状态： 成功态(resolve) 失败态(rejectd) 等待态(pending) (既不成功又不失败)
//promise 是一个类
//2) 用户自己决定失败的原因和成功的原因  失败和成功也是用户定义的
// 3)promise 默认执行器是立即执行
// 4)promise 的实例都有一个then方法， 一个是成功的回调，一个是失败的回调
//5)如果执行函数时发生了异常也会执行失败逻辑
//6) 如果promise一旦成功就不能失败，反之亦然(只有等待态的时候才能去更改状态)

console.log("my");
const RESOLVE = "RESOLVE";
const REJECTED = "REJECTED";
const PENDING = "PENDING";

//resolvePromise  所有的promise都要坚持
let resolvePromise = (promise2, x, resolve, reject) => {
  // 循环引用，自己等待自己完成 错误的实现
  if (promise2 === x) {
    //用一个类型错误，结束掉promise
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  // 后续的条件要严格判断，保证代码能和别的一起使用
  let called;
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    //有可能还是一个promise
    // 要继续判断
    try {
      let then = x.then;
      if (typeof then === "function") {
        //只能认为是一个promise
        //不要写成x.then 直接then.call 就可以了，因为x.then会再次取值
        then.call(
          x,
          (y) => {
            //根据promise的状态决定是成功还是失败
            console.log(resolve);
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject); //递归解析的过程
            // resolve(y)
          },
          (e) => {
            if (called) return;
            called = true;
            reject(e);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      // 防止失败了再走成功
      if (called) return;
      called = true;
      reject(error); //取值出错
    }
  } else {
    resolve(x);
  }
};

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.rejText = undefined;
    this.onSuccess = [];
    this.onReject = [];
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = RESOLVE;
        //发布
        this.onSuccess.forEach((fn) => fn(this.value));
      }
    };
    let reject = (rejText) => {
      if (this.status === PENDING) {
        this.rejText = rejText;
        this.status = REJECTED;
        //发布
        this.onReject.forEach((fn) => fn(this.rejText));
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  // promise 成功或失败的回调的返回值，可以传递到外层的下一个then
  // 如果返回的时普通值的话(传递到下一次的成功中)，出错的情况下(一定会走到下一次的失败)，可能还有promise的情况(会采用promise状态，决定下一次的成功还是失败)
  // 错误处理，如果离自己最近的then 没有错误处理(没有写处理函数) 回向下找
  // 每次执行完promise.then方法后返回的都是一个'新的promise'
  then(onsuccess, onerror) {
    onsuccess = typeof onsuccess === "function" ? onsuccess : (v) => v;
    onerror = typeof onerror === "function" ? onerror : (v) => v;
    let promise2 = new Promise((resolve, reject) => {
      //解决链式调用问题，用了懒递归(每次then的时候都再调Promise且返回一个新的promise)
      if (this.status === RESOLVE) {
        setTimeout(() => {
          try {
            let x = onsuccess(this.value);
            // x可能是promise
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onerror(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === PENDING) {
        //订阅 pending的时候，把then的两个形参都存起来
        this.onSuccess.push(() => {
          // todo 切片处理可以写自己的逻辑
          setTimeout(() => {
            try {
              let x = onsuccess(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onReject.push(() => {
          // todo 切片处理可以写自己的逻辑
          setTimeout(() => {
            try {
              let x = onerror(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        // console.log("等待");
      }
    });
    return promise2;
  }
}

// promise的延迟对象

Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
//npm install promises-aplus-tests -g
// promises-aplus-tests  文件名

module.exports = Promise;
