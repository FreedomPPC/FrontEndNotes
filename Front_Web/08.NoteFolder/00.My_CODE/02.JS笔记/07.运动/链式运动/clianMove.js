/*
 	@author Li Wenjian
 */
//链式运动是一个运动结束第二个运动开始.跟普通运动相比,
/*1.普通运动 startMove(obj,attr,iTarget);
2.链式运动 startMove(obj,attr,iTarget,Fn);
可以看到,链式运动比普通运动多传一个参数.顾名思义,第一次运动结束,第二次运动开始的话,就是当 clearInterval(timer);时开始第二次运动.*/

//1.获取内部样式的属性值.
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

//编写链式运动框架,和普通运动差不多,多一个回调函数
function startMove(obj,attr,iTarget,Fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iCur = 0;
		if(attr == 'opacity')
		{
			iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
		}
		else
		{
			iCur = parseInt(getStyle(obj,attr));
		}
		
		var iSpeed = (iTarget - iCur)/8;
		iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		if(iCur == iTarget)
		{
			clearInterval(obj.timer);
			
			if(Fn)
			{
				Fn();
			}
		}
		else
		{
			if(attr == 'opacity')
			{
				obj.style.filter = 'alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity = (iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr] = iCur + iSpeed +'px';
			}
		}
		
	},30)
}

