/**声明页面头部  开始**/
var React=require('react');
var ComponentHeader=React.createClass({
	render:function(){
		var _img="img/header-img.png";
		var _style=this.CSS;
		return(
			<div style={_style._style}>
			   <img style={_style._img_stlye} src={_img}/>
			</div>
		);
	}
});
ComponentHeader.prototype.CSS={
	_style:{
			width:"100%",
			height:"1rem",
			backgroundColor:"rgb(228,54,107)",
			overflow:"hidden",
			display:"flex",
			justifyContent:"center",
			alignItems:"center"
	},
     _img_stlye:{
			display:"block",
			width:"2.6rem",
			height:"0.46rem"
	}
}

/**声明页面头部  结束**/
module.exports=ComponentHeader;