const str = 'hello';
//1)module.exports=str
//2)exports.a=str
//3)module.exports.a=str

// exports 就是module.exports 的别名  为了用户挂在属性时更加方便 


exports.a = str;
module.exports=str; //不支持同时两种导出 如果两个都存在，默认智齿module.exports