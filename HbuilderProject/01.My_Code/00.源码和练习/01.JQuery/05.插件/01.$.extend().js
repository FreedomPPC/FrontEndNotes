(function($){
	
	$.extend({
		leftTrim:function(str){
			return str.replace(/^\s+/g,"");
		}
	});
	
	
	$.fn.extend({
		rightTrim:function(str){
			return str.replace(/\s+$/g,"");
		}
	})
})(jQuery);//采用闭包的方法写插件;
