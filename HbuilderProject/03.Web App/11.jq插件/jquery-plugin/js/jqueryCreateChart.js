(function($){//随时去使用到jquery对象
	  //  方法1$.fn.extend({object类型的方法}),在实现,再调用
	  // $.fn=$.prototype是在jquery对象的原型链上面追加api
	  //扩展的方法添加到jquery的实例  $("#cxt")  
	  //$()就是一个jquery实例化的对象 
	  //$全局对象 $表示的是jquery的类概念
	  
	  $.fn.extend({
	  	//$("").hightcharts({});
	  	highcharts:function(obj){
	  		var div=$('<div></div>');
	  		var title=obj.title;
	  		var width=obj.width;
	  		var height=obj.height;
	  		var back=obj.backgroundColor;
	  		var rad=obj.borderRadius;
	  		
	  		console.log(div);
	  		
  		   div[0].innerHTML=title;
	  		
	  		div[0].style.width=width+"px";
	  		
	  		div[0].style.height=height+"px";
	  		
	  		div[0].style.backgroundColor=back;
	  		
	  		div[0].style.borderRadius=rad+"px";
	  		
	  		$("#cxt").append(div);
	  	},
	  	getStudentName:function(){
	  		console.log("this is student name");
	  	}
	  	
	  });
	  //回顾 $.fn.extend() 
	  //$.fn.extend==$.prototype.方法  实际上是给$() 对象的原型链上面挂载函数
	  //$().方法名称就可以进行调用
	  
	  //  方法2$.extend({object类型的方法}),去实现extend中传递进去的object类型的方法,再调用
	  
	  $.extend({
		  	getAjax:function(){
		  		console.log("user invoke define ajax method");
		  	}
	  });
	  //$.extend 是$原型链上面挂载函数
	  
	  //$,$() $符号表示整个$的构造函数, $() 构造实例
	  
	  //对比
	  //1.总结 $.fn.extend是为$()实例的原型链上面去挂载函数
	  // $().函数名称 调用
	  
	  //2. $.extend是为 $构造函数上面挂载函数
	  
	  //  $.方法名称 调用
	  
	  //$.get $.post  $.ajax $.load
	  //开发中所遇见$.api名称方式调用的方法 底层 都是通过$.extend方式进行实现的
	  
	  //练习:自己去封装 一段ajax代码
	  /****
	   * $.ajax({
	   * url:'',	
	   * type:'get',
	   * async:true,
	   * success:function(){
	   * }
	   * })
	   * 
	   */
	  $.extend({ //$上面添加方法----->$.方法名字去调用
	  	/***
	  	 * 这个obj是外部调用时候 传入的参数 object类型
	  	 * @param {Object} obj
	  	 */
	  	myAjax:function(obj){
	  		console.log(obj);
	  		//1.ajax实现步骤 创建XMLHttpRequest()对象
	  		
	  		var xhr=new XMLHttpRequest();
	  		//2.open url请求
	  		xhr.open(obj.type,obj.url,obj.async);//打开方法 里面参数
	  		  xhr.onreadystatechange=function(){
		  			  var _json=JSON.parse(xhr.responseText);
		  			  //obj.success(_json);
		  			  //console.log(obj.success);
		  			  //console.log(obj.success());
		  			  obj.success(xhr.responseText);
		  			  //obj.success(xhr.responseText); //函数进行自调用
		  			  
		  		}
		  	xhr.send("");
	  	}
	  	
	  });
	  
	  
	  
	  
	  //1.框架封装的思想
	    //体现了一种封装的思想
	  
	  //2.框架封装的原则
	    //1.提供给开发者  ----关心我加入一些自己想要的参数,就可以得到自己想要的 结果
	    //2.越简单越好
	    //3.我们要分析得到这个插件要放什么参数进去(是不是对这个功能起绝对性作用参数),最终得到什么结果回来，  
	  
	  //3.具体的实现
	    //具体的显示 依靠大家自己的想法
	  
	
	
})(jQuery);
