//创建一个nodejs应用,
//第一步引入required模块
var http = require("http");

//第二步,创建服务器,使用http.creatServer()方法创建服务器,并使用listen方法绑定8888端口;函数通过request,response参数来接受和响应数据
http.createServer(function(request, response) {
    //发送http头部;
    //http状态值:200 :ok;
    //内容类型:text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    //发送响应数据"hello world";
    response.end("hello NodeJS\n");
}).listen(8888);
console.log('server running at http:127.0.0.1:8888');