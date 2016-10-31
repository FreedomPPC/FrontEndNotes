var React=require('react');
var ReactDOM=require('react-dom');
/**登录组件的layout 分成 loginHeader,loginBody两个部分,并渲染在主页面的banner中**/
var ComponentRegister=require('./ComponentRegister.js').root;
var ComponentRegisterHeader=require('./ComponentRegister.js').header;
var ComponentRegisterBody=require('./ComponentRegister.js').body;
var ComponentRegisterBodyNext=require('./ComponentRegister.js').next;

var ComponentLogin=React.createClass({
	render:function(){
		return(
			<div>
			   <div id="loginHeader"></div>
			   <div id="loginBody"></div>
			</div>
		);
	}
});
/**登录组件的layout 分成 loginHeader,loginBody两个部分,并渲染在主页面的banner中**/


/**登录组件的header 开始***/
var ComponentLoginHeader=React.createClass({
	render:function(){
		var _css=this.CSS;
		var _back="<";
		return(
			<div style={_css.div}>
			   <div style={_css.back}>{_back}</div>
			   <div style={_css.font}>账户登录</div>
			</div>
		);
	}
});
/**登录组件的header 结束***/
/**登录组件的header css 开始***/
ComponentLoginHeader.prototype.CSS={
	div:{
		width:"100%",
		height:"0.84rem",
		backgroundColor:"green",
		overflow:"hidden"
	},
	back:{
		float:"left",
		fontSize:"0.6rem",
		fontWeight:"500",
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
		marginLeft:"0.3rem"
	},
	font:{
		float:"left",
		fontSize:"0.36rem",
		fontWeight:"500",
		width:"6.6rem",//750-66 684
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
	}
}
/**登录组件的header css 结束***/

/**登录组件的body 开始***/
var ComponentLoginBody=React.createClass({
	handleClick:function(event){
		var _t=event.target.getAttribute("title");
		console.log(_t);
		ReactDOM.unmountComponentAtNode(document.getElementById("loginHeader"));
	    ReactDOM.unmountComponentAtNode(document.getElementById("loginBody"));
	    switch(_t){
			case "forgetpwd":
			 ReactDOM.render(<ComponentFindPwdHeader/>,document.getElementById("loginHeader"));
			 ReactDOM.render(<ComponentFindPwdBody/>,document.getElementById("loginBody"));
			break;

			case "register":
			  ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			  ReactDOM.render(<ComponentRegister/>,document.getElementById("banner"));
			  ReactDOM.render(<ComponentRegisterHeader/>,document.getElementById("registerHeader"));
			  ReactDOM.render(<ComponentRegisterBody/>,document.getElementById("registerBody"));
			break;
		}
	},
	render:function(){
		var _css=this.CSS;
		return(
			<div style={_css.div}>
			   <div style={_css.input}>
			     <input type="text" placeholder="手机号/用户名/邮箱" style={_css.inputs}/>
			   </div>

			   <div style={_css.input}>
			     <input type="text" placeholder="登录密码" style={_css.inputs}/>
			   </div>
			   <div style={_css.btn}>登录</div>
			   <div style={_css.aggre}>
			      <span title="forgetpwd" onClick={this.handleClick} style={_css.span}>忘记密码</span>
			      <span style={_css.span}>|</span>
			      <span title="register" onClick={this.handleClick} style={_css.span}>快速注册</span>
			   </div>
			</div>
		);
	}
});

ComponentLoginBody.prototype.CSS={
	div:{
		width:"100%",
		overflow:"hidden"
	},
	tool:{
		width:"6.9rem",
		height:"0.68rem",
		margin:"0.48rem auto",
		display:"flex"
	},
	toolOne:{
		width:"50%",
		height:"100%",
	    textAlign:"center",
	    lineHeight:"0.68rem",
	    fontSize:"0.3rem",
	},
	toolTwo:{
		width:"50%",
		height:"100%",
	    textAlign:"center",
	    lineHeight:"0.68rem",
	    fontSize:"0.3rem",
	},
	input:{
		width:"6.9rem",
		height:"0.68rem",
		margin:"0.36rem auto"
	},
	btn:{
		width:"6.9rem",
		height:"0.7rem",
		margin:"0.6rem auto",
		backgroundColor:"rgb(255,218,68)",
		fontSize:"0.36rem",
		textAlign:"center",
		lineHeight:"0.7rem",
	},
	inputs:{
		display:"block",
		width:"100%",
		height:"100%",
		border:"none",
		fontSize:"0.3rem",
		outline:"none"
	},
	aggre:{
		width:"6.9rem",
		height:"0.4rem",//416 396
		margin:"0.16rem auto",
		fontSize:"0.28rem",
		lineHeight:"0.4rem",
		color:"rgb(153,153,153)",
		textAlign:"center"
	},
	span:{
		fontSize:"0.28rem",
		color:"rgb(51,51,52)",
		textAlign:"center",
		letterSpacing:"0.08rem"
	}
}
/**登录组件的body 结束***/




/***找回密码第一步 找回密码也分成头部和body***/

var ComponentFindPwdHeader=React.createClass({
	render:function(){
		var _css=this.CSS;
		var _back="<";
		return(
			<div style={_css.div}>
			   <div style={_css.back}>{_back}</div>
			   <div style={_css.font}>找回密码</div>
			</div>
		);
	}
});
ComponentFindPwdHeader.prototype.CSS={
	div:{
		width:"100%",
		height:"0.84rem",
		backgroundColor:"rgb(255,218,68)",
		overflow:"hidden"
	},
	back:{
		float:"left",
		fontSize:"0.6rem",
		fontWeight:"500",
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
		marginLeft:"0.3rem"
	},
	font:{
		float:"left",
		fontSize:"0.36rem",
		fontWeight:"500",
		width:"6.6rem",//750-66 684
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
	}
}
var ComponentFindPwdBody=React.createClass({
	handleClick:function(event){
		ReactDOM.unmountComponentAtNode(document.getElementById("loginHeader"));
		ReactDOM.unmountComponentAtNode(document.getElementById("loginBody"));
		ReactDOM.render(<ComponentFindPwdSafeHeader/>,document.getElementById("loginHeader"));
		ReactDOM.render(<ComponentFindPwdSafeBody/>,document.getElementById("loginBody"));
	},
	render:function(){
		var _css=this.CSS;
		return(
			<div style={_css.div}>
			   <div style={_css.input}>
			     <input type="text" placeholder="手机号/用户名/邮箱" style={_css.inputs}/>
			   </div>
			   <div onClick={this.handleClick} style={_css.btn}>下一步</div>
			</div>
		);
	}
});
ComponentFindPwdBody.prototype.CSS={
	div:{
		width:"100%",
		overflow:"hidden"
	},

	input:{
		width:"6.9rem",
		height:"0.68rem",
		margin:"0.36rem auto"
	},
	btn:{
		width:"6.9rem",
		height:"0.7rem",
		margin:"0.6rem auto",
		backgroundColor:"rgb(255,218,68)",
		fontSize:"0.36rem",
		textAlign:"center",
		lineHeight:"0.7rem",
	},
	inputs:{
		display:"block",
		width:"100%",
		height:"100%",
		border:"none",
		fontSize:"0.3rem",
		outline:"none"
	}
}

/***找回密码第一步 找回密码也分成头部和body***/



/***找回密码第二步 找回密码也分成头部和body***/
var ComponentFindPwdSafeBody=React.createClass({
	handleClick:function(){
		//ComponentLoginNewPwdHeader
		ReactDOM.unmountComponentAtNode(document.getElementById("loginHeader"));
		ReactDOM.unmountComponentAtNode(document.getElementById("loginBody"));
		ReactDOM.render(<ComponentLoginNewPwdHeader/>,document.getElementById("loginHeader"));
		ReactDOM.render(<ComponentLoginNewPwdBody/>,document.getElementById("loginBody"));
	},
	render:function(){
		var _css=this.CSS;
		return(
			<div style={_css.div}>
			   <div style={_css.tool}>
			      请输入手机号152#####6915的验证码
			   </div>
			   <div style={_css.input}>
			     <input type="text" placeholder="短信验证码" style={_css.inputs}/>
			   </div>
			   <div onClick={this.handleClick} style={_css.btn}>下一步</div>
			</div>
		);
	}
});
ComponentFindPwdSafeBody.prototype.CSS={
	div:{
		width:"100%",
		overflow:"hidden"
	},
	tool:{
		width:"6.9rem",
		height:"0.32rem",
		margin:"0.2rem auto",
		display:"flex",
		lineHeight:"0.32rem",
		fontSize:"0.28rem",
		textAlign:"center",
		display:"block",
		color:"rgb(51,51,52)",
	},
	input:{
		width:"6.9rem",
		height:"0.68rem",
		margin:"0.36rem auto"
	},
	btn:{
		width:"6.9rem",
		height:"0.7rem",
		margin:"0.6rem auto",
		backgroundColor:"rgb(255,218,68)",
		fontSize:"0.36rem",
		textAlign:"center",
		lineHeight:"0.7rem",
	},
	inputs:{
		display:"block",
		width:"100%",
		height:"100%",
		border:"none",
		fontSize:"0.3rem",
		outline:"none"
	}
}

var ComponentFindPwdSafeHeader=React.createClass({
	render:function(){
		var _css=this.CSS;
		var _back="<";
		return(
			<div style={_css.div}>
			   <div style={_css.back}>{_back}</div>
			   <div style={_css.font}>安全校验</div>
			</div>
		);
	}
});
ComponentFindPwdSafeHeader.prototype.CSS={
	div:{
		width:"100%",
		height:"0.84rem",
		backgroundColor:"rgb(255,218,68)",
		overflow:"hidden"
	},
	back:{
		float:"left",
		fontSize:"0.6rem",
		fontWeight:"500",
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
		marginLeft:"0.3rem"
	},
	font:{
		float:"left",
		fontSize:"0.36rem",
		fontWeight:"500",
		width:"6.6rem",
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
	}
}
/***找回密码第二步 找回密码也分成头部和body***/




/***找回密码第三步 找回密码也分成头部和body**/

var ComponentLoginNewPwdHeader=React.createClass({
	render:function(){
		var _css=this.CSS;
		var _back="<";
		return(
			<div style={_css.div}>
			   <div style={_css.back}>{_back}</div>
			   <div style={_css.font}>设置新密码</div>
			</div>
		);
	}
});
ComponentLoginNewPwdHeader.prototype.CSS={
	div:{
		width:"100%",
		height:"0.84rem",
		backgroundColor:"rgb(255,218,68)",
		overflow:"hidden"
	},
	back:{
		float:"left",
		fontSize:"0.6rem",
		fontWeight:"500",
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
		marginLeft:"0.3rem"
	},
	font:{
		float:"left",
		fontSize:"0.36rem",
		fontWeight:"500",
		width:"6.6rem",//750-66 684
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
	}
}
var ComponentLoginNewPwdBody=React.createClass({
	render:function(){
		var _css=this.CSS;
		return(
			<div style={_css.div}>
			   <div style={_css.input}>
			     <input type="text" placeholder="输入新密码" style={_css.inputs}/>
			   </div>

			   <div style={_css.input}>
			     <input type="text" placeholder="确认密码" style={_css.inputs}/>
			   </div>
			   <div style={_css.btn}>登录</div>

			</div>
		);
	}
});
ComponentLoginNewPwdBody.prototype.CSS={
	div:{
		width:"100%",
		overflow:"hidden"
	},
	tool:{
		width:"6.9rem",
		height:"0.68rem",
		margin:"0.48rem auto",
		display:"flex"
	},
	toolOne:{
		width:"50%",
		height:"100%",
	    textAlign:"center",
	    lineHeight:"0.68rem",
	    fontSize:"0.3rem",
	},
	toolTwo:{
		width:"50%",
		height:"100%",
	    textAlign:"center",
	    lineHeight:"0.68rem",
	    fontSize:"0.3rem",
	},
	input:{
		width:"6.9rem",
		height:"0.68rem",
		margin:"0.36rem auto"
	},
	btn:{
		width:"6.9rem",
		height:"0.7rem",
		margin:"0.6rem auto",
		backgroundColor:"rgb(255,218,68)",
		fontSize:"0.36rem",
		textAlign:"center",
		lineHeight:"0.7rem",
	},
	inputs:{
		display:"block",
		width:"100%",
		height:"100%",
		border:"none",
		fontSize:"0.3rem",
		outline:"none"
	},
	aggre:{
		width:"6.9rem",
		height:"0.4rem",//416 396
		margin:"0.16rem auto",
		fontSize:"0.28rem",
		lineHeight:"0.4rem",
		color:"rgb(153,153,153)",
		textAlign:"center"
	},
	span:{
		fontSize:"0.28rem",
		color:"rgb(51,51,52)",
		textAlign:"center",
		letterSpacing:"0.08rem"
	}
}


/***找回密码第三步 找回密码也分成头部和body**/



var Login={};
Login.root=ComponentLogin;
Login.header=ComponentLoginHeader;
Login.body=ComponentLoginBody;
module.exports=Login;
