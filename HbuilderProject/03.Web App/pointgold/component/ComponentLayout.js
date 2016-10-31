var React=require('react');
var ReactDOM=require('react-dom');

var ComponentLayout=React.createClass({
	render:function(){
		return(
			<div>
			  <div id="header"></div>
			  <div id="banner"></div>
			  <div id="menu"></div>
			  <div id="footer"></div>
			</div>
		);
	}
});
module.exports=ComponentLayout;
