/**声明注册页面_1开始**/
var React=require('react');
var ReactDOM = require('react-dom');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentFooter=require('./ComponentFooter.js');

var RegisterTwo = require('./RegisterTwo');
var RegisterOne = React.createClass({
	handleClick:function(){
		console.log("a");
	},
	render:function(){
		
		var _css = this.CSS;
		return(
			<div style={_css.div}>
				<div style={_css.header}>
					
					<img style={_css.header_img} src={"img/button_img/zuojiantou.png"}/>
					
					<span style={_css.header_span}>注册</span>
				</div>
				<div style={_css._div}>
					<div style={_css.check_span} className="bg_1"></div><div style={_css.input_span}>我要赚钱</div>
					<div style={_css.check_span} className="bg_2"></div><div style={_css.input_span}>我要流量</div>	
				</div>
				
				<form>
					<input style={_css.input_text} type="type" placeholder="请输入手机号"/>
					<input className="btn_1" style={_css.input_button} type="button" value="下一步"/>
				</form>
				<div style={_css.last_div}>
					注册即视为同意点金手<a href="#">平台服务协议</a>
				</div>
			</div>
		);
	},
	componentDidMount:function(){
		$("img").eq(0).tap(function(){
			
	 		ComponentHeader=require('./ComponentHeader.js');
			ComponentBanner=require('./ComponentBanner.js');
			ComponentList=require('./ComponentList.js');
			ComponentFooter=require('./ComponentFooter.js');
			
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			
			//ReactDOM.render(<ComponentLayout/>,document.getElementById("app"));
			ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
			ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
			ReactDOM.render(<ComponentList/>,document.getElementById("list"));
			ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));
		});
		//勾选;
		$(".bg_1").tap(function(){
			
			$(".bg_1").css({
				"background":"url(img/button_img/duigou2.png)",
				"backgroundSize":"0.44rem 0.44rem"
				});
			$(".bg_2").css({
				background:"none"
			});
			
		});
		$(".bg_2").tap(function(){
			$(".bg_2").css({
				"background":"url(img/button_img/duigou2.png)",
				"backgroundSize":"0.44rem 0.44rem"
				});
			$(".bg_1").css({
				background:"none"
			});
			
		});
		
		//下一步;
		$('.btn_1').bind('touchstart',function(){
			console.log("下一步");
			//卸载组件
			ReactDOM.unmountComponentAtNode(document.getElementById('banner'));
			ReactDOM.unmountComponentAtNode(document.getElementById('header'));
			ReactDOM.unmountComponentAtNode(document.getElementById('list'));
			ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
			//选软组件
			ReactDOM.render(<RegisterTwo/>,document.getElementById("banner"));
		});
	},
});
RegisterOne.prototype.CSS = {
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
	_div:{
		width:"100%",
		height:"0.46rem",
		display:"flex",
		marginTop:"0.64rem",
	},
	check_span:{
		width:"0.44rem",
		height:"0.44rem",
		borderRadius:"50%",
		border:"1px solid black",
		marginLeft:"1rem",
		fontFamily:"微软雅黑",
		
		
	},
	input_span:{
		fontSize:"0.28rem",
		lineHeight:"0.46rem",
		marginLeft:"0.28rem",
		fontFamily:"微软雅黑",
	},
	input_text:{
		display:"block",
		width:"6.9rem",
		height:"0.67rem",
		marginLeft:"0.30rem",
		marginTop:"0.44rem",
		border:"1px solid black",
		outline:"none",
		textIndent:"0.3rem",
		lineHeight:"0.67rem",
		fontSize:"0.32rem",
		fontFamily:"微软雅黑",
		border:"none"
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
/**声明注册页面_1结束**/
module.exports=RegisterOne;