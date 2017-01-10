'use strict';
const fs = require('fs');

//打开一个流
const rs = fs.createReadStream('../input.txt', 'utf-8');

//data事件表示流的数据已经可以读取了
rs.on('data', function(chunk) {
    console.log("DATA EVENT");
    console.log("数据流chunk:" + chunk);
});

//end事件表示流的数据已经到末尾了
rs.on('end', function() {
    console.log('END EVENT');
});

//error事件表示出错了
rs.on('error', function(err) {
    console.log('ERROR EVENT:' + err);
});