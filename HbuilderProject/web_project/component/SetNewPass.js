/**声明设置新密码页面--开始**/
var React = require('react');
var ReactDOM = require('react-dom');

var FindMyPassTwo = require('./FindMyPassTwo.js');
var LogIn = require('./LogIn.js');

var SetNewPass = React.createClass({
	render:function(){
		
		var _css = this.CSS;
		return(
			<div style={_css.div}>
				<div style={_css.header}>
					
					<img style={_css.header_img} src={"img/button_img/zuojiantou.png"}/>
					
					<span style={_css.header_span}>账号登录</span>
				</div>
				
				<form style={_css.form}>
					<input style={_css.form_text} type="password" name="password" placeholder="输入新密码"/>
					<div style={_css.form_div}>
						<input className="input_pass" style={_css.form_div_pass} type="password" name="password" placeholder="确认新密码"/>
						<img className="hide_img" style={_css.form_div_img_1} src={"img/button_img/yanjing2.png"}/>
						<img className="show_img" style={_css.form_div_img_2} src={"img/button_img/yanjing.png"}/>
					</div>
					<div style={_css.div_text}>密码由6-12位英文字母,数字或符号组成</div>
					<input className="btn_1" style={_css.form_button} type="button" value="下一步"/>
				</form>
				
			</div>
		);
	},
	componentDidMount:function(){
		$("img").eq(0).bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			FindMyPassTwo = require('./FindMyPassTwo.js');
			ReactDOM.render(<FindMyPassTwo/>,document.getElementById("banner"));
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
		
		//确认新密码.转到登录界面;
		$(".btn_1").bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			LogIn = require('./LogIn.js');
			ReactDOM.render(<LogIn/>,document.getElementById("banner"));
			
		});
	}
});
SetNewPass.prototype.CSS = {
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
	div_text:{
		fontSize:"0.24rem",
		width:"4.38rem",
		height:"0.24rem",
		color:"rgb(153,153,153)",
		marginTop:"0.16rem",
	}
}
/**声明设置新密码页面--结束**/
module.exports = SetNewPass;
