//当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。
// 在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和array 不同）；
//Buffer对象可以和String作转换，例如把一个Buffer对象转换成String:
//Buffer --> String
// Buffer -> String
var text = data.toString('utf-8');
console.log(text);
// 或者把一个String转换成Buffer：
// String -> Buffer
var buf = new Buffer(text, 'utf-8');
console.log(buf);
