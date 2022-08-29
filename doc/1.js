const {resolve,join} = require('path');
// 会把相对路径转换成绝对路径
console.log(resolve('a','b'));
// 机械的链接
console.log(join('a','b'))