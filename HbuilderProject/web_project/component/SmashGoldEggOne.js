/**声明砸金蛋页面-1开始**/
var React = require('react');
var ReactDOM = require('react-dom');

var NewHeader = require('./NewHeader.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentFooter=require('./ComponentFooter.js');

var SmashGoldEggOne = React.createClass({
	render:function(){
		var _css = this.CSS;
		
		return(
			<div style={_css.div_body}>
				<div style={_css.header}>
					<img style={_css.header_img} src={"img/button_img/zuojiantou.png"}/>
					<span style={_css.header_span}>每日砸金蛋</span>
				</div>
				
				<div style={_css.smash}>
					<div style={_css.smash_one}>
						快来砸金蛋&nbsp;&nbsp;有加息哦
					</div>
					<div style={_css.smash_two}>当日最高可+10%</div>
					<img style={_css.img_egg} src={"img/button_img/jindan.png"}/>
					<img style={_css.img_hammer} src={"img/button_img/chuizi.png"}/>
					<button style={_css._button}>活动规则</button>
				</div>
			</div>
		);
	},
	componentDidMount:function(){
		//设置当前页面背景色;css好难设置;
		document.documentElement.style.background = 'rgb(233,72,56)';
		
		$("img").eq(0).bind('touchstart',function(){
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			document.documentElement.style.background="rgb(238,238,238)";
			 NewHeader = require('./NewHeader.js');
			 ComponentBanner=require('./ComponentBanner.js');
			 ComponentList=require('./ComponentList.js');
			 ComponentFooter=require('./ComponentFooter.js');
			 
			ReactDOM.render(<NewHeader/>,document.getElementById("header"));
			ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
			ReactDOM.render(<ComponentList/>,document.getElementById("list"));
			ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));
		});
	}
});

SmashGoldEggOne.prototype.CSS={
	
	header:{
		width:"100%",
		height:"0.8rem",
		background:"rgb(255,218,68)",
		display:"flex",
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
	smash:{
		width:"5.17rem",
		height:"8.13rem",
		marginLeft:"1.19rem",
		marginTop:"0.71rem",
		fontFamily:"微软雅黑",
		position:"relative",
		
	},
	smash_one:{
		width:"100%",
		height:"0.48rem",
		fontSize:"0.48rem",
		color:"rgb(255,218,68)",
		textAlign:"center",

	},
	smash_two:{
		width:"100%",
		heigth:"1rem",
		fontSize:"0.4rem",
		lineHeight:"1rem",
		textAlign:"center",
		color:"rgb(255,218,68)",
		
	},
	img_egg:{
		width:"3.39rem",
		height:"3.82rem",
		position:"absolute",
		left:"1.13rem",
		top:"2.44rem",
	},
	img_hammer:{
		width:"1.42rem",
		height:"1.39rem",
		position:"absolute",
		left:"3.68rem",
		top:"2.13rem",
	},
	_button:{
		width:"100%",
		height:"0.65rem",
		fontSize:"0.3rem",
		color:"white",
		lineHeight:"0.65rem",
		textALign:"center",
		background:"rgb(198,39,23)",
		border:"none",
		outline:"none",
		position:"absolute",
		bottom:"0px",
		
	}
}
/**声明砸金蛋页面_1结束**/
module.exports = SmashGoldEggOne;