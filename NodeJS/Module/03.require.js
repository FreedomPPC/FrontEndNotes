//nodejs 使用的是Commonjs规范,
const http = require('http');
//加载模块默认http.js const http  = require('http.js')
console.log(http);

// 内置require加载模块,如果找不到会报错.
const dd = require('dd');
console.log(dd);
// Error: Cannot find module 'dd'
//     at Function.Module._resolveFilename (module.js:469:15)
//     at Function.Module._load (module.js:417:25)
//     at Module.require (module.js:497:17)
//     at require (internal/module.js:20:19)
//     at Object.<anonymous> (E:\MyAllDemos\NodeJS\Module\03.require.js:6:12)
//     at Module._compile (module.js:570:32)
//     at Object.Module._extensions..js (module.js:579:10)
//     at Module.load (module.js:487:32)
//     at tryModuleLoad (module.js:446:12)
//     at Function.Module._load (module.js:438:3)

// 根据参数的不同格式，require命令去不同路径寻找模块文件。
// （1）如果参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件。比如，require('/home/marco/foo.js')将加载/home/marco/foo.js。
// （2）如果参数字符串以“./”开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块文件。
// 比如，require('./circle')将加载当前脚本同一目录的circle.js。
// （3）如果参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块（位于Node的系统安装目录中），
// 或者一个位于各级node_modules目录的已安装模块（全局安装或局部安装）。
// 举例来说，脚本/home/user/projects/foo.js执行了require('bar.js')命令，Node会依次搜索以下文件。
// /usr/local/lib/node/bar.js
// /home/user/projects/node_modules/bar.js
// /home/user/node_modules/bar.js
// /home/node_modules/bar.js
// /node_modules/bar.js
// 这样设计的目的是，使得不同的模块可以将所依赖的模块本地化。
// （4）如果参数字符串不以“./“或”/“开头，而且是一个路径，比如require('example-module/path/to/file')，
// 则将先找到example-module的位置，然后再以它为参数，找到后续路径。
// （5）如果指定的模块文件没有发现，Node会尝试为文件名添加.js、.json、.node后，再去搜索。
// .js件会以文本格式的JavaScript脚本文件解析，.json文件会以JSON格式的文本文件解析，.node文件会以编译后的二进制文件解析。
// （6）如果想得到require命令加载的确切文件名，使用require.resolve()方法。
