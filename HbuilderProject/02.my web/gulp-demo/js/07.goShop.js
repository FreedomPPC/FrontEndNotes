
var classify = "<div>this is classify</div>";
var shopcar="<div>this is shop car</div>";	   
window.onload = function(){
		document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4+"px";
		
		window.addEventListener('resize',function(){
			document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4+"px";
		},false);
		
		//刷新页面,停留当前页面;
		var current = window.localStorage.getItem("currentNode");
		if(current == null || current == "" || typeof(current) == undefined){
			
		}else{
			var _topSpan = document.getElementsByClassName('top_span')[0];
			switch(current){
					case 'index':
					_topSpan.style.left = "0%";
					$.get('http://datainfo.duapp.com/shopdata/getBanner.php',function(data){
						var point = data.indexOf('(');
						data = data.substring(point+1,data.length-1);
						data = JSON.parse(data);
						template(data,document.getElementsByClassName('banner')[0]);
						
					});
					break;
					
					case 'classify':
					_topSpan.style.left ="20%";
					document.getElementsByClassName('banner')[0].innerHTML = "";
					document.getElementsByClassName('banner')[0].innerHTML = eval(current);
					break;
					
					case 'shopcar':
					_topSpan.style.left="40%";
					document.getElementsByClassName('banner')[0].innerHTML = "";
					document.getElementsByClassName('banner')[0].innerHTML = eval(current);
					break;
					
					case 'myxiu':
					_topSpan.style.left="60%";
					break;
					
					case 'more':
					_topSpan.style.left="80%";
					break;
				}
				
		}
	
	//banner部分的动态轮播图;
	
	
	getAjax();
	
	//路由;
	var _footer = document.getElementsByTagName('footer')[0].children;
//	console.log(_footer);
	for(var i=0;i<_footer.length;i++){
		_footer[i].onclick = function(){
			if(this.nodeName == 'DIV'){
				
//				console.log(this.getAttribute('data-route'));
				var _route = this.getAttribute('data-route');
				var _topSpan = document.getElementsByClassName('top_span')[0];
				switch(_route){
					
					case 'index':
					_topSpan.style.left = "0%";
					$.get('http://datainfo.duapp.com/shopdata/getBanner.php',function(data){
						var point = data.indexOf('(');
						data = data.substring(point+1,data.length-1);
						data = JSON.parse(data);
						template(data,document.getElementsByClassName('banner')[0]);
						
					});
					break;
					
					case 'classify':
					_topSpan.style.left ="20%";
					document.getElementsByClassName('banner')[0].innerHTML = "";
					document.getElementsByClassName('banner')[0].innerHTML = eval(_route);
					break;
					
					case 'shopcar':
					_topSpan.style.left="40%";
					document.getElementsByClassName('banner')[0].innerHTML = "";
					document.getElementsByClassName('banner')[0].innerHTML = eval(_route);
					break;
					
					case 'myxiu':
					_topSpan.style.left="60%";
					break;
					
					case 'more':
					_topSpan.style.left="80%";
					break;
				}
				saveCurrentNode(_route)
				
				//1.调用getAjax()方法;
				getAjax();
			}
		}
	}
};

//当页面刷新的时候,还是停留在当前页面,用到window.localStorage;
function saveCurrentNode(_nodeName){
	var _localStorage = window.localStorage;
	_localStorage.setItem('currentNode',_nodeName);
	console.log("保存的_nodeName:"+_localStorage.getItem('currentNode'));
}
function template(data,renderNode){
	// 自定义模板 data外部传入的ajax数据,renderNode模板渲染的位置;
	var defaultTemp = '<div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide"><img class="swiper-img" src="img/07.banner_1.jpg"/></div></div> <div class="swiper-pagination"></div></div>'
	renderNode.innerHTML = defaultTemp;
	var properTemp = '';
	document.getElementsByClassName('swiper-wrapper')[0].innerHTML = '';
	
	for(var i=0;i<data.length;i++){
		var img = JSON.parse(data[i].goodsBenUrl)[0];
		properTemp += '<div class="swiper-slide"><img class="swiper-img" src="'+img+'"/></div>'
	}
	document.getElementsByClassName('swiper-wrapper')[0].innerHTML = properTemp;
	
	 var mySwiper = new Swiper('.swiper-container', {
			autoplay: 1000,//可选选项，自动滑动
			pagination : '.swiper-pagination',
		    });
	
};

function getAjax(){
		var httpurl = 'http://datainfo.duapp.com/shopdata/getBanner.php';
		$.get(httpurl,function(data){
			var point = data.indexOf('(');
			data = data.substring(point+1,data.length-1);
			data = JSON.parse(data);
			
			var swiperElement = '';
			$(".swiper-wrapper").html('');
			for(var i=0;i<data.length;i++){
				var img = data[i].goodsBenUrl;
				img = JSON.parse(img);
				img = img[0];
				swiperElement += '<div class="swiper-slide">'+'<img class="swiper-img" src="'+img+'"/>'+'</div>';
			}
			$(".swiper-wrapper").append(swiperElement);
			
		    var mySwiper = new Swiper('.swiper-container', {
			autoplay: 1000,//可选选项，自动滑动
			pagination : '.swiper-pagination',
		    });
		});
	}