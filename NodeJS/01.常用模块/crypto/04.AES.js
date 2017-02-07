'use strict';

//AES:Advanced Encryption Standard (高级加密标准);

// AES是一种常用的对称加密算法，加解密都用同一个密钥。
// crypto模块提供了AES支持，但是需要自己封装好函数，便于使用：

const crypto = require('crypto');

//加密
function aesEncrypt(data,key){
    const cipher = crypto.createCipher('aes192',key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

//解密
function aesDecrypt(encrypted,key){
    const decipher = crypto.createDecipher('aes192',key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// 测试
var data = 'this is a secret message !';
var key = 'myPassword';
var encryted = aesEncrypt(data,key);
var decryted = aesDecrypt(encryted,key);

console.log('Plain text:'+ data);
console.log('Encryted:'+ encryted);
console.log('Decryted:'+ decryted);
