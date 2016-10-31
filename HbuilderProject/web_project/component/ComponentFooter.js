/**声明页面footer部分开始**/
var React = require('react');
var ComponentFooter = React.createClass({
	render:function(){
		var _css = this.CSS;
		return(
			<div style={_css.footer}>
				<div style={_css.footer_div}><img style={_css.footer_div_img} src={"img/footer_img/index.png"}/></div>
				<div style={_css.footer_div}><img style={_css.footer_div_img} src={"img/footer_img/earn.png"}/></div>
				<div style={_css.footer_div}><img style={_css.footer_div_img} src={"img/footer_img/hot.png"}/></div>
				<div style={_css.footer_div}><img style={_css.footer_div_img} src={"img/footer_img/mine.png"}/></div>
			</div>
		);
	}
});
ComponentFooter.prototype.CSS={
	footer:{
		width:"100%",
		height:"0.91rem",
		backgroundColor:"rgb(255,218,68)",
		borderTop:"1px solid white",
		display:"flex",
		position:"fixed",
		bottom:"0px",
		
	},
	footer_div:{
		width:"25%",
		height:"100%",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
		
	},
	footer_div_img:{
		width:"0.47rem",
		height:"0.70rem",
	}
	
}
/**声明页面footer部分结束**/
module.exports = ComponentFooter;