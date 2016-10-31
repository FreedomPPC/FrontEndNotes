/**声明登录后的头部组件开始**/
var React = require('react');
var ReactDOM = require('react-dom');

var NewHeader = React.createClass({
	render:function(){
		var _css = this.CSS;
		return(
			<div style={_css.new_header}>
				<div style={_css.header_div_one}>
					<div><img style={_css.header_div_one_img} src={"img/button_img/zhuanqian.png"}/>我赚的钱</div>
					<div><img style={_css.header_div_one_img} src={"img/button_img/shouyi.png"}/>今日收益+<span>5.00</span></div>
				</div>
				
				<div style={_css.header_div_two}>
					<div><span style={_css.header_div_two_span}>5.15</span>元</div>
					<div style={_css.header_div_two_div}>查看明细</div>
				</div>
			</div>
		);
	}
});

NewHeader.prototype.CSS = {
	new_header:{
		width:"100%",
		height:"2.06rem",
		backgroundColor:"rgb(255,218,65)",
		overflow:"hidden",
	},
	header_div_one:{
		width:"6.91rem",
		height:"0.53rem",
		marginLeft:"0.32rem",
		marginTop:"0.25rem",
		display:"flex",
		justifyContent:"space-between",
		fontSize:"0.32rem",
		lineHeight:"0.53rem",
		fontFamily:"微软雅黑",
	},
	header_div_one_img:{
		width:"0.30rem",
		height:"0.32rem",
		marginRight:"0.14rem",
	},
	header_div_two:{
		width:"6.91rem",
		height:"0.67rem",
		marginLeft:"0.32rem",
		marginTop:"0.26rem",
		display:"flex",
		justifyContent:"space-between",
		fontSize:"0.29rem",
		fontFamily:"微软雅黑",
	},
	header_div_two_span:{
		fontSize:'0.67rem',
		marginRight:"0.22rem",
	},
	header_div_two_div:{
		width:"1.21rem",
		height:"0.44rem",
		border:"1px solid black",
		fontSize:"0.24rem",
		marginTop:"0.17rem",
		textAlign:"center",
		lineHeight:"0.44rem",
	},
}
/**声明登录后的头部组件结束**/
module.exports = NewHeader;