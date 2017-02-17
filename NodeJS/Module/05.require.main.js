//require方法有一个main属性，可以用来判断模块是直接执行，还是被调用执行。
// 直接执行的时候（node module.js），require.main属性指向模块本身。
const http = require('http');
console.log(require.main === http);//false
// 调用执行的时候（通过require加载该脚本执行），上面的表达式返回false。

//调用执行 flase;直接执行 true
