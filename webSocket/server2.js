
var http = require('http');
var fs = require('fs');//fs读取模块
var documentRoot = 'F:/websocket/www';
var server = http.createServer(function(req,res){
	// console.log('有人进来了');
	// console.log(req)//在dos中打印出req是有哪些内容;获取方式get,url:'....'
	var url = req.url;
	console.log(url);
	var url1='/index.html'
	//第一步,请求头部信息;包括两个参数,第一个状态码200或404,请求成功或失败;
	//第二个参数是json;列出往客户端发送的头部信息;文档格式及字符编码;
	// res.writeHeader(200,{//也可以尝试下404;
	// 	'content-type':'text/html;charset="utf-8"',
	// });
	//第二步,正文部分;
	// res.write('这是正文');
	//第三步.结束;
	// res.end();

	var file = documentRoot+url1;
	console.log(file);

	fs.readFile(file,function(err,data){
		if(err){
			res.writeHeader(404,{
				'content-type':'text/html;charset="utf-8"'
			});
			res.write('<h1>404</h1><p>您要找的页面去火星了</p>');
			res.end();
		}else{
			res.writeHeader(200,{
				'content-type':'text/html;charset="utf-8"'
			});
			res.write(data);
			res.end();
		}
	});


}).listen(8888);//创建完server后添加监听端口;
console.log('服务器开启成功');