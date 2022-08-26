//模块加载的顺序问题

//node 版本 11.13默认不写后缀，会先尝试找文件，如果无法找到会继续查找文件夹下的index.js
// 把文件夹变成一个包  需要创建一个JSON来描述这个包的入口是哪个
let str = require('./a') //如果有package.json 会以package.json为准
console.log(str)


// 如果没有路径 可能是核心模块  会认为是第三方模块  会找node_modules
console.log(module.paths);//第三方查找的顺序

// 以前的版本 会先去找包  默认包里面有index.js 不回去找package.json