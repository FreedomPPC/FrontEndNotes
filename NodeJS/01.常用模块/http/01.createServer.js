'use strict';

const http = require('http');

//创建http server , 并传入回调函数
const server = http.createServer(function(req,res){
    //回调函数接受request reponse对象;
    //request 获取http请求的method和url;
    console.log(req.method,req.url);
    //打印
    //GET: /
    //GET: /favicon.ico
    //将http响应的200写入response,同时设置Content-type:text/html;
    res.writeHead(200,{'Content-Type':'text/html'});
    //将http响应的html内容写入response;
    res.end('<h1>Hello NodeJS HTTP Server</h1>');

});

//让服务器监听 3000 端口;
server.listen(5000);


console.log('http server is running at http://127.0.0.1:5000');
