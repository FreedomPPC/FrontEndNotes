var React=require('react');
var ReactDOM=require('react-dom');
//var MovieComponent=require('./MovieComponent.js');
//var ShopsComponent=require('./ShopsComponent.js');
var Router=require('./router.js');
var ReactComponent=React.createClass({
	mixins:[Router],
	render:function(){
		var css=this.CSS;
		return(
			<div>
			  <div style={css.header} id="header">
			     <div onClick={this.router} data-path="/MovieComponent" data-view="#content" style={css.movie}>movie</div>
			     <div onClick={this.router} data-path="/ShopsComponent" data-view="#content" style={css.shops}>shops</div>
			  </div>
			  <div style={css.content} id="content"></div>
			</div>
		);
	}
});
ReactComponent.prototype.CSS={
	header:{
		width:"100%",
		height:"1rem",
		backgroundColor:"#0087dc",
		overflow:"hidden",
		display:"flex",
		textAlign:"center",
		fontSize:"0.28rem",
		lineHeight:"1rem"
	},
	movie:{
		width:"50%",
		height:"1rem",
		backgroundColor:"red",
	},
	shops:{
		width:"50%",
		height:"1rem",
		backgroundColor:"blue",
	},
	content:{
		width:"100%",
		overflow:"hidden",
	},
	
}
module.exports=ReactComponent;