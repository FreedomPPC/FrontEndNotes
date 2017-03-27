(function(){
	var pre = document.querySelector("pre"),
		title = document.title,
		data = localStorage.getItem(title) ;

	data?(pre.innerHTML=data):localStorage.setItem(title,pre.innerHTML);
	
	// document.addEventListener("keydown",function(e){
	// 	if( e.ctrlKey  == true && e.keyCode == 83 ){
	// 		localStorage.setItem(title,pre.innerHTML);
	// 		e.preventDefault();
	// 		return false;
	// 	}
	// 	return false;
	// },false);

	pre.addEventListener("focus",function(e){
		var target = e.target,
		    html = target.innerHTML;
		target.innerHTML = html.replace(/[<>]/g,function(c){
			return c==="<"?"&lt;":"&gt;";
		});
	},false);

	pre.addEventListener("blur",function(e){
		var target = e.target,
		    html = target.innerHTML;
		target.innerHTML = html.replace(/(&lt;|&gt;)/g,function(c){
			return c==="&lt;"?"<":">";
		});
		localStorage.setItem(title,target.innerHTML);
	},false);
})()