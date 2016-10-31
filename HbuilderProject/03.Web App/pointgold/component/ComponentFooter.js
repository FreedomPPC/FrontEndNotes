var React=require('react');
var ComponentFooter=React.createClass({
	render:function(){
		var _s=this.CSS;
		return(
			<div style={_s.div}>
			   <div style={_s._div} onClick={this.handleClick} title="index">首页</div>
			   <div style={_s._div} onClick={this.handleClick} title="classfy">赚钱</div>
			   <div style={_s._div} onClick={this.handleClick} title="shopcar" title="shopcar">榜单</div>
			   <div style={_s._div} onClick={this.handleClick} title="myshow" title="myshow">我的</div>
			</div>
		);
	}
});
ComponentFooter.prototype.CSS={
	div:{
		display:"flex",
		position:"fixed",
		bottom:"0px",
		width:"100%",
		height:"1.06rem",
		backgroundColor:"rgb(255,218,68)", //1212 1116  106
	},
	_div:{
		width:"25%",height:"100%",lineHeight:"1rem",textAlign:"center",fontSize:"0.24rem"
	}
}
module.exports=ComponentFooter;