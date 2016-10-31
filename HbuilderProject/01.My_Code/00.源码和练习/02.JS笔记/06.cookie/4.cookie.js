function setCookie(name, value, iDay)
		{
			var oDate=new Date();
			
			oDate.setDate(oDate.getDate()+iDay);
			
			document.cookie=name+'='+value+';expires='+oDate;
		};
		
		function getCookie(name)
		{
			//'username=abc; password=123456; aaa=123; bbb=4r4er'
			var arr=document.cookie.split('; ');
			var i=0;
			
			//arr->['username=abc', 'password=123456', ...]
			
			for(i=0;i<arr.length;i++)
			{
				//arr2->['username', 'abc']
				var arr2=arr[i].split('=');
				
				if(arr2[0]==name)
				{
					return arr2[1];
				}
			}
			
			return '没找到存储信息';
		};
		
		function removeCookie(){
			setCookie(name,'1',-1);
		}