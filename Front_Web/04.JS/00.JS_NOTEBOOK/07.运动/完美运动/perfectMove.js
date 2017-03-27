/*
 	@author Li Wenjian
 * */
function getStyle(obj,attr){
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,json,Fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true; //标志着这次运动结束了.
		for(attr in json){
			//1.获取元素当前属性,
			var iCur = 0;
			if(attr == 'opacity')
			{
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				iCur = parseInt(getStyle(obj,attr));
			}
			
			//2.速度
			var iSpeed = (json[attr] - iCur)/7;
			iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//3.检测运动
			if(iCur != json[attr])
			{
				bStop = false;
			}
			
			if(attr == 'opacity')
			{
				obj.style.filter = 'alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity = (iCur + iSpeed)/100;
			}
			else
			{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
			
		}
		
			if(bStop)
			{
				clearInterval(obj.timeri);
					
					if(Fn)
					{
						Fn();
					}
			}
		
	},30);
}
