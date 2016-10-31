/*
   @ author Li Wenjian
 */
//该框架有一个bug,就是如果给元素添加事件,每一次触发事件,都会给元素一个出事速度,所以尽量还是不要使用框架.
function startMove(obj,iSpeedX,iSpeedY){
				
				clearInterval(obj.timer);
				obj.timer = setInterval(function( ){ 
					
					
					iSpeedY += 3;
					
					var l = obj.offsetLeft + iSpeedX;
					var t = obj.offsetTop + iSpeedY;
					
					if(t >= document.documentElement.clientHeight-obj.offsetHeight)
					{
						iSpeedY *= -0.8;
						iSpeedX *= 0.8;
						t = document.documentElement.clientHeight-obj.offsetHeight;
					}
					else if(t <= 0)
					{
						iSpeedY *= -1;
						iSpeedX *= 0.8;
						t = 0;
					};
					
					if(l >= document.documentElement.clientWidth - obj.offsetWidth)
					{
						iSpeedX *= -0.8;
						l = document.documentElement.clientWidth - obj.offsetWidth
					}
					else if(l <= 0)
					{
						iSpeedX *= -0.8;
						l = 0;
					};
					
					//解决一个小bug;
					if(Math.abs(iSpeedY)<1){
						iSpeedY = 0;
						
					};
					
					if(Math.abs(iSpeedX)<1){
						iSpeedX = 0;
					};
					
					
					obj.style.left = l + 'px';
					obj.style.top = t+'px';
					document.title = 'ispeedx:'+iSpeedX;
					
				},30);
			}
