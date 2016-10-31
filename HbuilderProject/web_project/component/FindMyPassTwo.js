/**声明找回密码_2页面开始**/
var React = require('react');
var ReactDOM = require('react-dom');

var FindMyPassOne = require('./FindMyPassOne.js');
var SetNewPass = require('./SetNewPass.js');

var FindMyPassTwo = React.createClass({
	render:function(){
		var _css = this.CSS;
		return(
			<div style={_css.div}>
				<div style={_css.header}>
					
					<img style={_css.header_img} src={"img/button_img/zuojiantou.png"}/>
					
					<span style={_css.header_span}>安全校验</span>
				</div>
				
				<div style={_css.div_2}>
					请输入手机号<span>189####9002</span>收到的短信校验码
				</div>
				
				<form>
					<div style={_css._div_3}>
						<input style={_css._div_3_text} type="number" placeholder="请输入验证码"/>
						<input style={_css._div_3_button} type="button" value="重新发送"/>
					</div>
					
					<input className="btn_1" style={_css.input_button} type="submit" value="下一步"/>
				</form>
				
				
			</div>
		);
	},
	componentDidMount:function(){
		$("img").eq(0).bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			FindMyPassOne = require('./FindMyPassOne.js');
			ReactDOM.render(<FindMyPassOne/>,document.getElementById("banner"));
			
		});
		//跳转到设置新密码界面;
		$(".btn_1").bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			ReactDOM.render(<SetNewPass/>,document.getElementById("banner"));
		});
	},
});
FindMyPassTwo.prototype.CSS = {
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
	div_2:{
		width:"4.96rem",
		height:"0.24rem",
		color:"gray",
		marginTop:"0.34rem",
		marginLeft:"1.27rem",
		fontSize:"0.24rem",
		lineHeight:"0.24rem",
	},
	_div_3:{
		width:"6.9rem",
		height:"0.67rem",
		backgroundColor:"white",
		display:"flex",
		marginLeft:"0.30rem",
		marginTop:"0.30rem",
	
	},
	_div_3_text:{
		width:"5.6rem",
		height:"0.67rem",
		fontSize:"0.3rem",
		lineHeight:"0.67rem",
		textIndent:"0.16rem",
		border:"none",
		outline:"none",
		fontFamily:"微软雅黑",
	},
	_div_3_button:{
		width:"1.28rem",
		height:"0.3rem",
		outline:"none",
		textIndent:"0.16rem",
		border:"none",
		borderLeft:"0.01rem solid gray",
		marginRight:"0rem",
		marginTop:"0.2rem",
		fontFamily:"微软雅黑",
		background:"none",
	},
	
	input_button:{
		display:"block",
		width:"6.92rem",
		height:"0.67rem",
		marginLeft:"0.30rem",
		marginTop:"0.33rem",
		background:"rgb(255,218,68)",
		border:"none",
		outline:"none",
		fontSize:"0.32rem",
		fontFamily:"微软雅黑",
	},
}
/**声明找回密码_2页面结束**/
module.exports = FindMyPassTwo;


