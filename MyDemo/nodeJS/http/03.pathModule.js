'use strict';
// 处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录：

const path = require('path');

//解析当前目录
const workDir = path.resolve(__dirname,'../stream');

console.log(workDir);//E:\MyAllDemos\MyDemo\nodeJS\http

//组合完整的文件路径,当前目录+pub+index.html;

var filePath = path.join(workDir,'pub','index.html')
console.log(filePath);//E:\MyAllDemos\MyDemo\nodeJS\http\pub\index.html

// 使用path模块可以正确处理操作系统相关的文件路径。
// 在Windows系统下，返回的路径类似于C:\Users\michael\static\index.html，这样，我们就不关心怎么拼接路径了。
