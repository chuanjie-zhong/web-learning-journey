
// es7 语法 node并不支持  webpack + babel
// es7 更高的语法 都要转换成es5
class Animal{
    static flag = '哺乳类'
    constructor(){
        this.name=xxx;
    }
    say(){
        console.log('说话')
    }
}

// babel-cli => @babel/cli 默认包 模块 都不安装在全局上
// 安装本地模块 保证版本一致
// npx node 5.2 版本以上提供的，帮我们执行.bin 目录下的文件


// nom i @babel/core -D babel核心包 用于转换代码

// bable的配置中 一般配两个 配置插件 预设(插件的集合)
