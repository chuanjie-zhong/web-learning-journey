//process 进程 nextTick
// Buffer 缓存区  存储二进制  16进制
// clearTnterval
// clearTimeout
// setInterval
// setTimeout
// claerImmediate
// setImmediate node中


// console.log(Object.keys(process),'进程对象')

//1)node 库 区分平台
// platfrom  操作系统  window 
// console.log(process.platform)

// 每个系统的 用户文件夹都是不同的 /use


// 2) argv 参数列表   cwd  当前工作目录

// webpack  --port  --config --process

// console.log(process.argv.slice(2));// 从第二个开始是用户传入的参数

// 使用tj  commander 可以帮我们直接实现解析参数的功能

// 安装 npm i commander

const program = require('commander');
// 1.追加参数信息2.解析参数
// program.on('--help',()=>{
//     console.log('node xxx')
// })
// // 自动配置，属性对应的功能
// program.option('-p,--port <value>','set my port');
// program.command('create').action(()=>{
//     console.log('vue create app')
// })
// program.version('1.0.0')
// let obj = program.parse(process.argv);
// console.log(obj._version,obj._optionValues.port,'obj')



// let obj = process.argv.slice(2).reduce((memo,current,index,arr)=>{//收敛函数
//     if(current.startsWith('--')){
//         memo[current.slice(2)]=arr[index+1]
//     }
//     return memo;
// },{})

// console.log(obj)


//3) env环境变量
// cross-env  npm i cross-env -g 跨平台设置环境变量  可以安装成全局 -g MAC下需要加sudo
// npm run server
// nom run build
// console.log(process.env)

// 4) cwd current working directory 当前的工作目录


// console.log(process.cwd()) // 在哪里运行就是当前的目录

// 每个文件外面  都会包一层函数 为了实现模块化  他在当前文件执行的时候  包了一层函数 并且将函数中的this改了

// console.log(arguments); //exports  require module __filename __dirname

//exports  require module __filename __dirname也是全局对象  可以直接使用

// console.dir(global,{
//     showHidden:true
// })