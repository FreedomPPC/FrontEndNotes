var admin = require('./admin.js');
var user = require('./user.js');
var  app=function(){
	console.log("this is app js");
	admin();
	user();
}
	app();
