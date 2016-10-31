var Common=(function(){
	    	function commonApi(){
	    		return{
	    			checkInputValue:function(){
	    		        alert("begin check input");
			    	},
			    	checkBtnValue:function(){
			    		alert("begin check btn");
			    	}
	    		}
	    	}
	    	return {
	    		getInstance:function(){
	    			return commonApi();
	    		}
	    	}
	    })();
var common=Common.getInstance();