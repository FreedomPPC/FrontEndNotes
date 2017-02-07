//阻塞代码实例
//node.js异步编程的直接体现就是回调;异步编程依托回调来实现,但不能说明回调后程序就异步
//化了;
var fs = require("fs");

var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log("执行程序结束");
