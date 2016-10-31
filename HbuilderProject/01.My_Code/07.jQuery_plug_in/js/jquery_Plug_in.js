(function($){//随时去使用到jquery对象;
	//方法1:$.fn.extend({object类型的方法}),再实现,再调用;
	//$.fn=$.prototype是在jquery对象的原型链上面追加api;
	$.fn.extend({
		highcharts:function(obj){
			console.log("run this $.fn.extend &&& obj"+obj);
		}
	});
	
	
	
	
	//方法2:$.extend({object类型方法}),去实现extend中传递进去的object类型的方法;再调用;
	
})(jQuery);
