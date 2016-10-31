/**声明页面头部开始**/
var React = require('react');
var ReactDOM = require('react-dom');
var RegisterOne = require('./RegisterOne.js');
var LogIn = require('./LogIn.js');

var ComponentHeader = React.createClass({
	render:function(){
		var _img_logo = "img/button_img/logo.png";
		var _img_register = "img/button_img/register.png";
		var _img_Login = "img/button_img/log_in.png";
		
		var _css = this.CSS;
		return(
			<div style={_css._style} id="div">
				<img src={_img_logo} style={_css._style_img_logo}/>
				<div style={_css._style_div}>
					<img src={_img_register} style={_css._style_div_img} id="register"/>
					<img src={_img_Login} style={_css._style_div_img} id="LogIn"/>
				</div>
			</div>
		);
	},
	componentDidMount:function(){
		$("#register").bind('touchstart',function(){
			//卸载其他组件;
			
			ReactDOM.unmountComponentAtNode(document.getElementById('banner'));
			ReactDOM.unmountComponentAtNode(document.getElementById('header'));
			ReactDOM.unmountComponentAtNode(document.getElementById('list'));
			ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
			//渲染注册页面
			ReactDOM.render(<RegisterOne/>,document.getElementById('banner'));
		});
		$("#LogIn").bind('touchstart',function(){
			//卸载其他组件;
			
			ReactDOM.unmountComponentAtNode(document.getElementById('banner'));
			ReactDOM.unmountComponentAtNode(document.getElementById('header'));
			ReactDOM.unmountComponentAtNode(document.getElementById('list'));
			ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
			//渲染注册页面
			ReactDOM.render(<LogIn/>,document.getElementById('banner'));
		});
		
		
	}
});
ComponentHeader.prototype.CSS={
	_style:{
		width:"100%",
		height:"2.06rem",
		backgroundColor:"rgb(255,218,65)",
		display:'flex',
		overflow:"hidden"
	},
	_style_img_logo:{
		width:'2.92rem',
		height:'1.23rem',
		display:'block',
		marginTop:'0.45rem',
		marginLeft:'0.43rem'
	},
	_style_div:{
		width:'2.65rem',
		height:'0.48rem',
		display:'flex',
		justifyContent:'space-between',
		marginTop:'0.96rem',
		marginLeft:'0.5rem',
	},
	_style_div_img:{
		display:'block',
		width:'1.23rem',
		height:'0.48rem',
		
	}
};
/**声明页面头部结束**/

module.exports=ComponentHeader;