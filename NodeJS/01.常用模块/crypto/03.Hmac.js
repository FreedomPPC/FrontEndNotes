// Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥：
const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'secret-key1');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex')); // 80f7e22570...

//secret-key:80f7e22570bed1fa3ef683edce5d0890e268e1ca8d1bd0c382bc766f3744be9f
// 只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，
// 因此，可以把Hmac理解为用随机数“增强”的哈希算法。
//secret-key1:29989e02f612befd76234302afca70c5763f499e6f2e2e6021665306979156c4
