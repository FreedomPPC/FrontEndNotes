//1.在一个大函数内部套了无数个小的函数,大函数是一个运行中的函数
//var $=(function(){})();

//2.在这个函数内部 自定义很多小的function

//3.如果想要在外部去访问这个内部函数 需要在function结束的地方 通过return的方式return出一个object{},function,变量

var jQuery=(function(){
	    console.log("t");
	   /***
		 * 
		 * @param {Object} nodes 需要外界用户传入具体的dom节点
		 * @param {Object} callback 识别成功以后的回传值
		 */
		function touch(nodes,callback){//function(s){}
			var startX,startY;
			var moveX,moveY;
			var endX,endY;
			
			var absX,absY;//定义最终得到的x 和开始x的差值 ,最终得到的y值和开始y的差值
			
			var status="tap";//识别后得到的状态值 slideleft,slideright,slidetop,slidedown
			console.log(nodes);
			nodes.addEventListener("touchstart",function(event){
				//console.log(event);
				startX=event.touches[0].clientX;
				startY=event.touches[0].clientY;
			},false);
			nodes.addEventListener("touchmove",function(event){
				//console.log(event);
				moveX=event.touches[0].clientX;
				moveY=event.touches[0].clientY;
			},false);
			nodes.addEventListener("touchend",function(event){
				//console.log(event);
				endX=event.changedTouches[0].clientX;
				endY=event.changedTouches[0].clientY;
				//2.计算和判断
				absX=endX-startX;
				absY=endY-startY;
				//定制规范:if(absX-absY>50)
				if(absX>0){//if((endX-startX)>0){}
					console.log("往右运动");
					status="slideright";
					callback(status);
				}else if(absX<0){
					console.log("往左运动");
					status="slideleft";
					callback(status);
				}
			},false);
			
			
		}
        function sayHello(){
        	console.log("this is hello");
        }
        var S=function(){
        	console.log("this is s");
        }
        function initVar(){
        	return{
        		getA:function(){
        			console.log("a");
        		},
        		getB:function(){
        			console.log("b");
        		},
        		getC:function(){
        			console.log("c");
        		}
        	}
        }
	    
	    //在一个函数中return 表示两种意义
	    //1.函数的结束
	    //2.函数运行的结果
	    
	    //1.return函数
//	    return function(nodes,callback){
//	    	touch(nodes,callback);
//	    }
        
        //2.return变量
	    //return S;
	    
	    //3.return 对象 可以return出来多个函数结构
//	    return{
//	    	$touch:function(nodes,callback){
//	    		touch(nodes,callback);
//	    	},
//	    	$sayHello:function(){
//	    		sayHello();
//	    	}
//	    }
        return {
        	getInstance:function(){
        	  return initVar();
        	}
        }
	    
})();

		