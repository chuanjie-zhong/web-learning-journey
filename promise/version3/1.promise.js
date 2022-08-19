let fs = require('fs');

// error first 错误第一 异步方法无法通过try，catch捕获异常
fs.readFile('./name.txt','utf8',(err,data)=>{
    fs.readFile(data,'utf8',(err,data)=>{
        console.log(data)
    })
})