var Common = (function(){
	function commonApis(){
					return{
	    			checkInputValue:function(){
	    		        alert("begin check input");
			    	},
			    	checkBtnValue:function(){
			    		alert("begin check btn");
			    	}
	    		}
			}
			
			return{
				getInstance:function(){
					return commonApis();
				}
			}
})();

var common = Common.getInstance();