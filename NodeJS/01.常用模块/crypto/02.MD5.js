//MD5是一种常用的HASH算法,用于给任意数据一个签名
//这个数据通常用一个十六进制的字符串表示;
//crypto ['krɪpto]:秘密赞同者；秘密党员
const crypto = require('crypto');

const hash = crypto.createHash('md5');

//可以任意多次调用update
hash.update('hello, world');
hash.update('hello, nodejs');

console.log(hash.digest('hex'));

// update()方法默认字符串编码为UTF-8，也可以传入Buffer。
// 如果要计算SHA1，只需要把'md5'改成'sha1'，就可以得到SHA1的结果1f32b9c9932c02227819a4151feed43e131aca40。
// 还可以使用更安全的sha256和sha512。
