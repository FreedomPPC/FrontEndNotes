var $=(function(){
	
	function myTouch(nodes,callback){
		var startX,startY;
		var moveX,moveY;
		var endX,endY;
		
		var absX,absY;
		var status = 'temp';
		nodes.addEventListener('touchstart',function(event){
			startX = event.touches[0].clientX;
			startY = event.touches[0].clientY;
			console.log("touchstart");
			
		},false);
		
		nodes.addEventListener('touchmove',function(event){
			moveX = event.touches[0].clientX;
			moveY = event.touches[0].clientY;
			console.log("touchmove");
		},false);
		
		nodes.addEventListener('touchend',function(event){
			endX = event.changedTouches[0].clientX;
			endY = event.changedTouches[0].clientY;
			console.log("touchend");
			
			absX = endX - startX;
			absY = endY - startY;
			if(absX > 0){
				console.log("向右滑动");
				status = 'slideRight';
				callback(status)
			}else if(absY < 0){
				console.log("向左滑动");
				status = 'slideLeft';
				callback(status);
			}
			
			 if(absY < 0){
			 	console.log("向上滑动");
			 	status = 'slideUp';
			 	callback(status);
			 }else if(absY > 0){
			 	console.log("向下滑动");
			 	status = 'slideDown';
			 	callback(status);
			 }
			
			
		},false);
	};
	
	//闭包封装一个函数,可以返回一个对象,可以返回一个函数,可以返回一个变量;
	//1.返回一个对象的写法,应用的时候就是$._touch
	return{
		_touch:function(nodes,callback){
			
			myTouch(nodes,callback);//调用封装的函数
		}
	}
	//2.返回一个函数;
	 // return function(nodes,callback){
	 //    	myTouch(nodes,callback);
	 //    }
})();//调用自己.
