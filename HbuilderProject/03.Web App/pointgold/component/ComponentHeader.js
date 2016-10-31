var React=require('react');
var ReactDOM=require('react-dom');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentMenu=require('./ComponentMenu.js');
var ComponentFooter=require('./ComponentFooter.js');

var ComponentLogin=require('./ComponentLogin.js').root;
var ComponentLoginHeader=require('./ComponentLogin.js').header;
var ComponentLoginBody=require('./ComponentLogin.js').body;

var ComponentRegister=require('./ComponentRegister.js').root;
var ComponentRegisterHeader=require('./ComponentRegister.js').header;
var ComponentRegisterBody=require('./ComponentRegister.js').body;



var ComponentHeader=React.createClass({
	handleClick:function(event){
		var _title=event.target.getAttribute("title");
		console.log(_title);
		this.unmountComponent();
		switch(_title){
			case 'login':
			 ReactDOM.render(<ComponentLogin/>,document.getElementById("banner"));
			 
			 ReactDOM.render(<ComponentLoginHeader/>,document.getElementById("loginHeader"));
			 ReactDOM.render(<ComponentLoginBody/>,document.getElementById("loginBody"));
			break;
			case 'register':
			 ReactDOM.render(<ComponentRegister/>,document.getElementById("banner"));
			 ReactDOM.render(<ComponentRegisterHeader/>,document.getElementById("registerHeader"));
			 ReactDOM.render(<ComponentRegisterBody/>,document.getElementById("registerBody"));
			break;
		}
		
	},
	unmountComponent:function(){
		ReactDOM.unmountComponentAtNode(document.getElementById("header"));
	    ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
		ReactDOM.unmountComponentAtNode(document.getElementById("menu"));
		ReactDOM.unmountComponentAtNode(document.getElementById("footer"));
	},
	render:function(){
		var _img="img/logo.png";
		var _style=this.CSS;
		return(
			<div style={_style._style}>
			  <div style={_style._img_div}>
			    <img style={_style._img_stlye} src={_img}/>
			  </div>
			  <div style={_style._user_div}>
			      <div onClick={this.handleClick} title="register" style={_style._user_div_register}>注册</div>
			      <div onClick={this.handleClick} title="login" style={_style._user_div_login}>登录</div>
			  </div>
			</div>
		);
	}
});
ComponentHeader.prototype.CSS={
	_style:{
			width:"100%",
			height:"2.06rem",
			backgroundColor:"rgb(255,218,68)",
			overflow:"hidden",
			justifyContent:"center",
			alignItems:"center"
	},
    _img_div:{
    	width:"2.96rem",
		height:"1.23rem",
		float:"left",
		marginLeft:"0.44rem",
		marginTop:"0.44rem",
    },
     _img_stlye:{
			display:"block",
			width:"2.96rem",
			height:"1.23rem"
	},
	_user_div:{
		width:"2.96rem",
		height:"0.48rem",
		float:"right",
		marginTop:"0.96rem",
		marginRight:"0.44rem", //706-584 566
	},
	_user_div_register:{
		float:"left",
		width:"1.22rem",
		height:"0.48rem",
		fontSize:"0.14rem",
		border:"1px solid #000000",
		textAlign:"center",
		lineHeight:"0.48rem",
		color:"#000000"
	},
	_user_div_login:{
		float:"left",
		width:"1.22rem",
		height:"0.48rem",
		fontSize:"0.14rem",
		border:"1px solid #000000",
		textAlign:"center",
		marginLeft:"0.18rem",
		lineHeight:"0.48rem",
		color:"#000000"
	}
	
}
module.exports=ComponentHeader;