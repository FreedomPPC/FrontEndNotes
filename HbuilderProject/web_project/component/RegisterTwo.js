/**声明RegisterTwo组件开始**/
var React = require("react");
var ReactDOM = require('react-dom');
var RegisterOne = require('./RegisterOne.js');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentFooter=require('./ComponentFooter.js');
var RegisterTwo = React.createClass({
	render:function(){
		var _css = this.CSS;
		return(
			<div style={_css.div}>
				<div style={_css.header}>
					
					<img style={_css.header_img} src={"img/button_img/zuojiantou.png"}/>
					
					<span style={_css.header_span}>注册</span>
				</div>
				
				<div style={_css.div_2}>
					请输入手机号<span>189####4568</span>收到的短信校验码
				</div>
				
				<form>
					<div style={_css._div_3}>
						<input style={_css._div_3_text} type="text" placeholder="请输入验证码"/>
						<input style={_css._div_3_button} type="buttom" value="重新发送"/>
					</div>
					
					<input className="btn_1" style={_css.input_button} type="submit" value="完成"/>
				</form>
				
				<div style={_css.last_div}>
					注册即视为同意点金手<a href="#">平台服务协议</a>
				</div>
			</div>
			
		);
	},
	componentDidMount:function(){
		$("img").bind('touchstart',function(){
			console.log("back");
			RegisterOne = require('./RegisterOne.js');
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			ReactDOM.render(<RegisterOne/>,document.getElementById("banner"));
		});
		
		$(".btn_1").bind('touchstart',function(){
			ComponentHeader=require('./ComponentHeader.js');
			ComponentBanner=require('./ComponentBanner.js');
			ComponentList=require('./ComponentList.js');
			ComponentFooter=require('./ComponentFooter.js');
			
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
			ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
			ReactDOM.render(<ComponentList/>,document.getElementById("list"));
			ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));
		});
	}
});
	
RegisterTwo.prototype.CSS = {
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
	last_div:{
		width:"6.92rem",
		height:"0.24rem",
		marginLeft:"0.30rem",
		marginTop:"0.30rem",
		fontSize:"0.24rem",
		color:"gray",
	}
}
/**声明RegisterTwo组件结束**/
module.exports = RegisterTwo;