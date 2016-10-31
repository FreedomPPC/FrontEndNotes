/**声明找回密码_1开始**/
var React = require('react');
var ReactDOM = require('react-dom');

var LogIn = require('./LogIn.js');
var FindMyPassTwo = require('./FindMyPassTwo.js');

var FindMyPassOne = React.createClass({
	render:function(){
		var _css = this.CSS;
		return(
			<div style={_css.div}>
				<div style={_css.header}>
					
					<img style={_css.header_img} src={"img/button_img/zuojiantou.png"}/>
					
					<span style={_css.header_span}>找回密码</span>
				</div>
				
				<form style={_css.form}>
					<div style={_css._div_3}>
						<input style={_css._div_3_text} type="text" placeholder="手机号/登录名/邮箱"/>
						<input style={_css._div_3_button} type="button" value="重新发送"/>
					</div>
					
					<input className="btn_1" style={_css.input_button} type="button" value="下一步"/>
				</form>
				
			</div>
		);
	},
	componentDidMount:function(){
		$("img").bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			LogIn = require('./LogIn.js');
			ReactDOM.render(<LogIn/>,document.getElementById("banner"));
			
		});
		
		//跳转到找回密码下一步;
		$(".btn_1").bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			
			ReactDOM.render(<FindMyPassTwo/>,document.getElementById("banner"));
			
		});
	},
});

FindMyPassOne.prototype.CSS={
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
		lineHeight:"0.3rem",
		outline:"none",
		textIndent:"0.10rem",
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
/**声明找回密码_1结束**/
module.exports = FindMyPassOne;