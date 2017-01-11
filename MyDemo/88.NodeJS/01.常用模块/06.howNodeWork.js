/*
	在node程序中,执行异步操作的函数,将回调函数作为最后一个参数,回调函数接受错误对象作为
	第一个参数,
 */
var fs = require("fs");
fs.readFile('./input.txt', function(err,data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());//后打印 2，
});
console.log("程序执行完毕");//异步，先打印 1，
