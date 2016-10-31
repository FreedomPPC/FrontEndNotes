var React = require('React');
var ComponentDetail = React.createClass({
	render:function(){
		var _css = this.CSS;
		return(
			<div style={_css.list}>
				this is detail comp
			</div>
		);
	}
});
ComponentDetail.prototype.CSS={
	list:{
		color:'blue'
	}
}
module.exports = ComponentDetail;
