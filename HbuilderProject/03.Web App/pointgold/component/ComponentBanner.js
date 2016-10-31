var React=require('react');
var ComponentBanner=React.createClass({
	render:function(){
		var _style=this.CSS;
		return(
			<div>
			  <div style={_style.banner}>
			    <div className="swiper-container">
				    <div className="swiper-wrapper">
				        <div className="swiper-slide">
						     <img style={_style.img} className="swiper-img" src="img/1.png"/>
					    </div>
					     <div className="swiper-slide">
						     <img style={_style.img} className="swiper-img" src="img/2.png"/>
					    </div>
				    </div>
				   <div className="swiper-pagination"></div>
			     </div>
			   </div>
			</div>
		);
	}
});
ComponentBanner.prototype.CSS={
	banner:{
	     width:"100%",
         height: "3.22rem"//528 206
	},
	img:{
		display: "block",
        width:"100%",
        height: "3.22rem"
	}
	
}
module.exports=ComponentBanner;
