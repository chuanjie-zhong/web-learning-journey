- 浏览器事件环
- Node是什么？可以做什么？
- 进程和线程的区别
- 同步、异步/阻塞、非阻塞
- node中的全局对象
- node事件环
- 宏任务和微任务


## 1.浏览器事件环
- (每个进程互相不影响) 而且可以协同工作 进程(计算机分配任务 和 调度任务的最先单位) > 线程

- 浏览器事件环 (js单线程的) 主线程只有一个 setTimeout ajax setInterval requestFrameAnimation 事件，事件环来实现任务的调度

## 2.node是什么？可以做什么？runtime可以让js运行在服务端，单线程
- js组成:(BOM DOM) ECMAScript(es6模块)   模块的特性 api包  帮你实现文件操作服务端的创建

- 单线程: 好处高并发  不适合CPU密集 适合I/O密集

- 多线程: 缺点是每次请求都会开启新的线程，浪费内存  切换时间片概念(浪费性能) 好处是多个请求可以同时处理  大量的计算逻辑 适合CPU密集 压缩合并计算

- 写些脚本 中间层  服务端渲染（Vue  react）可以实现前后端分离
- 实现高性能的web服务

## 3.进程和线程的区别
- 一个进程中有多个线程，比如渲染线程，JS 引擎线程、HTTP 请求线程等等，进程表示一个程序，线程是进程的单位，主线程只有一个

- 一个线程可以占用一核CPU node单进程 单线程  (开子线程)  4-32

- 多线程在单核CPU中其实也是顺序执行的，不过系统可以帮你切换那个执行而已，没有提高速度
- 多个CPU的话就可以在多个CPU中同时进行

> 单线程优点：解决切换上下文时间，锁的问题，节省内存(多线程)

> node 主线程，在开多个子进程，里面包含着一个线程

## 4.同步、异步/阻塞、非阻塞


## 7.宏任务和微任务
- 微任务：promise.then , MutationObserver, process.nextTick
- 宏任务：script ,ajax,事件，requestFrameAnimation,setTimeout,setInterval,setImmediate(ie下),MessageChannel,I/O, UI rendering

> 微任务会比宏任务快，js中会先执行script脚本

## Vue.nextTick (vue dom渲染都是异步的)

- promise 最先执行promise  低版本浏览器不识别