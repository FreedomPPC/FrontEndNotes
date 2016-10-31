/**声明登陆组件LogIn开始**/
var React = require('react');
var ReactDOM = require('react-dom');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentFooter=require('./ComponentFooter.js');
var RegisterOne = require('./RegisterOne.js');
var FindMyPassOne = require('./FindMyPassOne.js');
var NewHeader = require('./NewHeader.js');

var LogIn = React.createClass({
	render:function(){
		var _css = this.CSS;
		return(
			<div style={_css.div}>
				<div style={_css.header}>
					
					<img style={_css.header_img} src={"img/button_img/zuojiantou.png"}/>
					
					<span style={_css.header_span}>账号登录</span>
				</div>
				
				<form style={_css.form}>
					<input style={_css.form_text} type="text" name="username" placeholder="手机号/用户名/邮箱"/>
					<div style={_css.form_div}>
						<input className="input_pass" style={_css.form_div_pass} type="password" name="password" placeholder="登录密码"/>
						<img className="hide_img" style={_css.form_div_img_1} src={"img/button_img/yanjing2.png"}/>
						<img className="show_img" style={_css.form_div_img_2} src={"img/button_img/yanjing.png"}/>
					</div>
					<input className="login" style={_css.form_button} type="button" value="登录"/>
				</form>
				
				<div style={_css.div_last}>
					<div className="find_pass" style={_css.div_last_div}>找回密码</div>
					<div style={_css.div_last_span}>丨</div>
					<div className="fast_regis" style={_css.div_last_div}>快速注册</div>
				</div>
				
				
				
			</div>
		);
	},
	componentDidMount:function(){
		$("img").eq(0).bind('touchstart',function(){
			ComponentHeader=require('./ComponentHeader.js');
			ComponentBanner=require('./ComponentBanner.js');
			ComponentList=require('./ComponentList.js');
			ComponentFooter=require('./ComponentFooter.js');
			//卸载组件
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			//渲染组件
			ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
			ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
			ReactDOM.render(<ComponentList/>,document.getElementById("list"));
			ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));
		});
		//密码不可见;
		$(".hide_img").bind('touchstart',function(){
			$('.input_pass').attr("type","password");
			console.log('密码不可见');
		});
		//密码可见;
		$(".show_img").bind('touchstart',function(){
			$('.input_pass').attr("type","text");
			console.log('密码可见');
		});
		//跳转找回密码组件,
		$(".find_pass").bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			ReactDOM.render(<FindMyPassOne/>,document.getElementById("banner"));
		});
		//跳转到快速注册组件,
		$(".fast_regis").bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			ReactDOM.render(<RegisterOne/>,document.getElementById("banner"));
		});
		//登录跳转到登录主页;
		$(".login").bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			ComponentBanner=require('./ComponentBanner.js');
			ComponentList=require('./ComponentList.js');
			ComponentFooter=require('./ComponentFooter.js');
			
			ReactDOM.render(<NewHeader/>,document.getElementById("header"));
			ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
			ReactDOM.render(<ComponentList/>,document.getElementById("list"));
			ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));
			
		});
		
	},
});
LogIn.prototype.CSS = {
	div:{
		fontFamily:"微软雅黑",
	},
	header:{
		width:"100%",
		height:"0.8rem",
		background:"rgb(255,218,68)",
		display:"flex"
	},
	header_img:{
		display:"block",
		width:"0.2rem",
		height:"0.25rem",
		marginTop:"0.3rem",
		marginLeft:"0.2rem"
		
	},
	header_span:{
		fontSize:"0.36rem",
		lineHeight:"0.8rem",
		display:"block",
		marginLeft:"2.82rem",
		fontFamily:"微软雅黑",
	},
	form:{
		width:"6.89rem",
		height:"2.56rem",
		marginTop:"0.41rem",
		marginLeft:"0.31rem",
		display:"block",
	},
	form_text:{
		display:"block",
		width:"6.89rem",
		height:"0.67rem",
		border:"none",
		outline:"none",
		fontSize:"0.24rem",
		lineHeight:"0.67rem",
		fontFamily:"微软雅黑",
		textIndent:"0.42rem",
	},
	form_div:{
		width:"6.89rem",
		height:"0.67rem",
		background:"white",
		marginTop:"0.30rem",
		position:"relative",
	},
	form_div_img_1:{
		position:"absolute",
		width:"0.40rem",
		height:"0.14rem",
		right:"0.75rem",
		top:"0.32rem",
	},
	form_div_img_2:{
		position:"absolute",
		width:"0.37rem",
		height:"0.22rem",
		right:"0.14rem",
		top:"0.22rem",
	},
	form_div_pass:{
		display:"block",
		width:"6.89rem",
		height:"0.67rem",
		border:"none",
		outline:"none",
		fontSize:"0.24rem",
		lineHeight:"0.67rem",
		fontFamily:"微软雅黑",
		textIndent:"0.42rem",
	},
	form_button:{
		fontSize:"0.29rem",
		lineHeight:"0.67rem",
		fontWeight:"400",
		fontFamily:"微软雅黑",
		width:"6.89rem",
		height:"0.67rem",
		display:"block",
		backgroundColor:"rgb(255,218,68)",
		outline:"none",
		border:"none",
		marginTop:"0.3rem",
	},
	div_last:{
		fontSize:"0.26rem",
		color:"rgb(125,125,125)",
		width:"3.13rem",
		height:"0.26rem",
		marginLeft:"2.2rem",
		marginTop:"0.44rem",
		display:"flex",
		justifyContent:"space-between",
	},
	
	
	
	
	
}
/**声明登陆组件LogIn结束**/
module.exports = LogIn;