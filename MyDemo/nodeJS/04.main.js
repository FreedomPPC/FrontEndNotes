/**
 * 非阻塞代码;
 */
var fs = require("fs");

fs.readFile('input.txt',function(err,data){
  if(err)return console.err(err);
  console.log(data.toString());
});
console.log("程序执行结束");
/**
 * 以上两个main.js的实例告诉我们,阻塞和非阻塞调用的不同,第一个实例在文件读取完之后才执行完程序.第二个实例告诉我们不需要等待文件读取完,这样就可以在读取文件时同时执行接下来的代码;大大提高了程序的性能;因此阻塞是按顺序执行的,而非阻塞是不按顺序来执行的,所以如果需要处理回调函数的参数我们就需要写在回调函数内;
 */
