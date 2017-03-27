//获取内部样式的属性,避免使用offsetWidth;
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

//编写运动框架,包括透明度,因为透明度有小数,写起来相比没有透明度会添加很多判断
function startMove(obj,attr,iTarget){
	
clearInterval(obj.timer);
obj.timer = setInterval(function(){
	var iCur = 0;
	
	if(attr === 'opacity')
	{
		iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
	}
	else
	{
		iCur = parseInt(getStyle(obj,attr));
	}
	
	var iSpeed = (iTarget-iCur)/8;
	iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
	
	if(iCur == iTarget)
	{
		clearInterval(obj.timer);
	}
	else
	{
		if(attr == 'opacity'){
			obj.style.filter = 'alpha:(opacity'+(iCur+iSpeed)+')'; 
			obj.style.opacity = (iCur+iSpeed)/100;
		}
		else
		{
			obj.style[attr] = iCur+iSpeed+'px';
		}
	}
},30);
}