/*
 * 入口js;功能就是独立的;
 * 还需要依赖其他js --- app.js调用其他的js里面的功能;
 * 举例:要在app.js中调用ModuleA里面的方法;
 * 
 * 如何处理两个关系js之间的依赖;
 * seajs中提供了一个可以将js文件声明成一个模块的方法;
 * 处理的方法;就是想要将ModuleA.js声明成一个模块;再在App.js里面去调用才可以;
 */
//define(function(require, exports, module){
//	var _a = require("ModuleA");
//	var initApp = function(){
//		
//		console.log("this is App Js");
//		_a.getA();//ModuleA里面CommonA定义的是一个object
//		_a.getB();
//	};
//	initApp();
//});

//1.要求在模块App.js中分别调用moduleA里面的方法;也可以调用ModuleB里面的方法;
 /*
  *  思路:1.在Modulea当中实现他的方法;
  * 	2.在ModuleB当中实现他的方法;
  * 3.将模块a,b封装成模块,对外提供模块;
  * 4.app.js  define()
  */
 
// define(function(require,exports,module){
// 	var _layout = require('ModuleA');
// 	var _header = require('ModuleB');
// 	_layout();
// 	_header();
// });


//reactjs和seajs一起;
define(function(require,exports,module){
	var ComponentLayout = React.createClass({
		render:function(){
			return(
				React.createElement('div',null,'this is lay out comp')
			);
		}
	});
	React.render(React.createElement(ComponentLayout,null,null),document.body);
});
