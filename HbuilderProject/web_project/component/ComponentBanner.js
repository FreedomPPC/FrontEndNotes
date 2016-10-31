/**声明页面banner开始**/
var React = require('react');
var ComponentBanner = React.createClass({
	render:function(){
		var _css = this.CSS;
		return(
			<div style={_css.banner}>
				<div className="swiper-container">
				    <div className="swiper-wrapper">
				        <div className="swiper-slide"><img src={"img/Banner_img/1.gif"} style={_css.img}/></div>
				        <div className="swiper-slide"><img src={"img/Banner_img/2.gif"} style={_css.img}/></div>
				        <div className="swiper-slide"><img src={"img/Banner_img/3.gif"} style={_css.img}/></div>
				        <div className="swiper-slide"><img src={"img/Banner_img/4.gif"} style={_css.img}/></div>
				    </div>
				    <div className="swiper-pagination"></div>
				</div>
			</div>
		);
	},
	componentDidMount:function(){
		  var swiper=new Swiper('.swiper-container',{
			    		autoplay:2000,
			    		pagination : '.swiper-pagination'
		  });
		
	}
});
ComponentBanner.prototype.CSS={
	banner:{
		width:"100%",
		height:"3.2rem",
		
	},
	img:{
		width:"100%",
		height:"3.2rem",
	}
};

/**声明页面banner结束**/
module.exports=ComponentBanner;