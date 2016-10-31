;(function(root,PubSub){
        	 var SWIPE =root.Swipe= {};
			var etypes = "left right top bottom".split(" ");

			etypes.forEach(function(item){
				var eType = "swipe"+item; 
				SWIPE[eType] = function(dom,fn){
					var startPos,
			        	endPos ;
			        var SWIPE_DIS = 30,
			        	SWIPE_TIME = 500,
			        	angle ,
			        	START_TIME
			        	;
			        //endPos a{x:,y}
			        var getDis = function(endPos,startPos){
			        	var ySpan = endPos.y - startPos.y,
			        		xSpan = endPos.x - startPos.x;
			        		return Math.sqrt(xSpan*xSpan+ySpan*ySpan);
			        }

			        var getAngle = function(endPos,startPos){
			        	var ySpan = endPos.y - startPos.y,
			        		xSpan = endPos.x - startPos.x;
			        		var rd = Math.atan2(-ySpan,xSpan);
			        		return rd*180/Math.PI  ;//具体的角度
			        }

			        var dealResult = function(angle){

			        	var direction;
						if(angle<45&&angle>-45){
							direction = "right";
						}else if(angle>=45&&angle<135){
							direction = "top";
						}else if(angle>=135||angle<-135){
							direction = "left";
						}else 
							direction = "bottom";
						PubSub.trigger("swipe"+direction,dom);
						// info.innerHTML = direction ;
			        }

			        var eHandler = function(e){
			        	// console.log(e.type);
			        	// if(e.type!="touchend"){

			        	// }
			        	switch(e.type){
			        		case "touchstart":{
			        			START_TIME = Date.now();
			        			startPos = {
			        				x: e.touches[0].clientX,
			        				y: e.touches[0].clientY
			        			};
			        			// ball.style.display = "block";
			        			break;
			        		};
			        		case "touchmove" : {
			        			endPos = {
			        				x: e.touches[0].clientX,
			        				y: e.touches[0].clientY
			        			};
			        			// ball.style.left = e.touches[0].clientX +"px";
			        			// ball.style.top  = e.touches[0].clientY + "px";
			        			e.preventDefault();
			        			break;
			        		}
			        		case "touchend"  : {
			        			var dis = getDis(endPos,startPos);
			        			var timeSpan = Date.now()-START_TIME;
			        			if(dis>SWIPE_DIS&&timeSpan<SWIPE_TIME){
			        				//满足条件
			        				//怎么拿到角度
			        				var angle = getAngle(endPos,startPos);
			        				dealResult(angle);
			        			}
			        			// ball.style.display="none";

			        		}
			        	}
			        };
			        // debugger
			        if(!dom.attached){
				        "start move end".split(" ").forEach(function(item){
				        	dom.addEventListener("touch"+item,eHandler);
				        	dom.attached = true;
				        });
			        }
					PubSub.on(eType,dom,fn);
				}
			});

        })(this,PubSub);