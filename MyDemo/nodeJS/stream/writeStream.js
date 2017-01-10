'use strict';

const fs = require('fs');

const ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用stream写入文本数据...\n');
ws1.write('THE END.');
ws1.end();

//写入二进制数据流
const ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用stream写入二进制数据...\n','utf-8'));
ws2.write(new Buffer('THE END.','utf-8'));
ws2.end();
