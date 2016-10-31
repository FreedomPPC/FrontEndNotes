var u=require('./user.js');
var a=require('./admin.js');
var app=function(){
	
	console.log("initial app js");
	u();
	a().getAdminRole();
}
app();


