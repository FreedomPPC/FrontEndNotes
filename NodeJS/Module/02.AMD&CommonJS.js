// AMD规范和CommonJS规范
// CommonJS规范加载模块是同步的,也就是说只有加载完成,才能执行后面的操作
// AMD规范则是非同步加载模块,允许指定回调函数.由于node.js主要用于服务器
// 编程,模块文件一般已经存在本地硬盘当中,所以加载起来比较快,不用考虑非同
// 步加载的方式,所以CommonJS规范比较适用.但是如果是浏览器环境,要从服务器
// 加载模块,这时就必须用非同模式,因此浏览器一般采用AMD规范,

//AMD规范的例子
define(['package/lib'],function(lib){
    function foo(){
        lib.log('hello world!');
    }
    return {
        foo: foo
    }
});
//AMD兼容CommonJS
define(function(require,exports,module){
    var someModule = require("someModule");
    var anotherModule = require("anotherModule");

    someModule.doTehAwesome();
    anotherModule.doMoarAwwesome();

    exports.asplode = function(){
        someModule.doTehAwesome();
        anotherModule.doMoarAwwesome();
    }

});
