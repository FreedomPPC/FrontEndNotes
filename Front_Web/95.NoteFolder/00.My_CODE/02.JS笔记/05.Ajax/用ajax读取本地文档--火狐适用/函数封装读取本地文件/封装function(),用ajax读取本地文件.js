function ajax(url,fnSucc,fnFaild){
	
	var oAjax = null;
	if(window.XMLHttpRequest){
		oAjax = new XMLHttpRequest();
	}else{
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}

	oAjax.open('get',url,true);

	oAjax.send();

	oAjax.onreadystatechange = function () {
		if(oAjax.readyState === 4){
			if(oAjax.status === 200){
				fnSucc(oAjax.responseText);
			}else{
				if(fnFaild){
					fnFaild(oAjax.status);
				}
			}
		}
	}
}