/**声明分享页面--开始**/
var React = require('react');
var ReactDOM = require('react-dom');

var ShareGoldFinger = React.createClass({
	render:function(){
		var _css = this.CSS;
		var color={color:"rgb(255,198,0)"};
		var _color={color:"rgb(255,198,0)",fontSize:"0.63rem"};
		var _text={marginLeft:"0.90rem"};
		var _div={marginLeft:"0.3rem"};
		
		return(
			<div style={_css.share}>
				<div style={_div}>
					邀请1个好友奖励
					<span style={color}>现金<span style={_color}>3.0</span>元</span>
				</div>
				<div style={_text}>赶紧推荐朋友拿现金</div>
				<div style={_css.share_div_1}>
					<div style={_css._share_div}>微信</div>
					<div style={_css._share_div}>QQ</div>
					<div style={_css._share_div}>新浪微博</div>
					<div style={_css._share_div}>微信朋友圈</div>
					<div style={_css._share_div}>QQ空间</div>
					<div style={_css._share_div}>复制地址</div>
				</div>
				<button style={_css._button}>关闭</button>
			</div>
		);
	},
	componentDidMount:function(){
		$("button").bind('touchstart',function(){
			$("#share").slideUp("slow");
		});
	}
});
ShareGoldFinger.prototype.CSS = {
	share:{
		width:"4.74rem",
		height:"6.53rem",
		marginLeft:"1.49rem",
		marginTop:"2.28rem",
		fontSize:"0.30rem",
		color:"white",
		fontFamily:"微软雅黑",
	},
	share_div_1:{
		display:"flex",
		width:"4.74rem",
		flexWrap:"wrap",
		justifyContent:"space-between",
		
	},
	_share_div:{
		width:"33.3%",
		height:"1.32rem",
		lineHeight:"1.32rem",
		textAlign:"center",
	},
	_button:{
		width:"100%",
		height:"0.61rem",
		background:"rgb(255,198,0)",
		border:"none",
		outline:"none",
		fontSize:"0.3rem",
		lineHeight:"0.61rem",
		fontFamily:"微软雅黑",
		fontWeight:"500",
		textALign:"center",
		marginTop:"0.83rem",
	}
}
/**声明分享页面--结束**/
module.exports=ShareGoldFinger
