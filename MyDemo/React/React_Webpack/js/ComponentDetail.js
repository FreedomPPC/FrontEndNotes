var React=require('react');
var ComponentDetail =React.createClass({
	render:function(){
		var styles=this.CSS;
		return(
			<div>
			   <div>
			   
			   </div>
			   
			   <div style={styles.footer}>
			       <div style={styles.footerIcon}>介绍</div>
			       <div style={styles.footerIcon}>详情</div>
			       <div style={styles.footerIcon}>实拍</div>
			   </div>
			</div>
		);
	}
});
ComponentDetail.prototype.CSS={
	imgCxt:{
		width:"100%",
		backgroundColor:"#fafafa",
	},
	img:{
		
	},
	footer:{
		width:"100%",
		height:"1rem",
		backgroundColor:"rgb(96,95,101)",
		position:"fixed",
		bottom:"0",
		display:"flex"
	},
	footerIcon:{
		textAlign:"center",
		fontSize:"0.28rem",
		width:"33.33%",
		lineHeight:"1rem",
	}
}

module.exports=ComponentDetail;