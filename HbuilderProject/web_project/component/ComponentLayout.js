var React = require('react');
var ReactDOM = require('react-dom');


var ComponentLayout = React.createClass({
	render:function(){
		return(
			<div>
				<div id="header"></div>
				<div id="banner"></div>
				<div id="list"></div>
				<div id="footer"></div>
				
			</div>
		);
	},
	componentDidMount:function(){
		document.documentElement.style.background="rgb(238,238,238)";
	},
});
	
module.exports = ComponentLayout;

