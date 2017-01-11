'use strict';

const fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

//从命令行参数获取root目录,默认是当前目录,
const root = path.resolve(process.argv[2] || '../index.html');
console.log('Static root dir:' + root);

const server = http.createServer(function(request, response) {
    //获取url的path,类似'/css/bootstrap.css';
    let pathname = url.parse(request.url).pathname;
    //获取对应本地文件路径,类似'/srv/www/css/bootstrap.css';
    let filepath = path.join(root, pathname);

    console.log(filepath); //E:\MyAllDemos\MyDemo\nodeJS\http\
    //获取文件状态
    fs.stat(filepath, function(err, stat) {
        if (!err && stat.isFile()) {
            //没有出错并且文件存在;
            console.log('200:' + request.url);
            //发送200响应;
            response.writeHead(200,{'Content-Type':'text/html'});
            //将文件流导向response
            fs.createReadStream(filepath).pipe(response);
            // 没有必要手动读取文件内容。由于response对象本身是一个Writable Stream，
            // 直接用pipe()方法就实现了自动读取文件内容并输出到HTTP响应。
        } else {
            //出错了,或者文件不存在
            console.log('404:' + request.url);
            //发送404响应;
            response.writeHead(404);
            response.end('404 not found');
        }
    });

});

server.listen(8888);

console.log('http://127.0.0.1:8888');
