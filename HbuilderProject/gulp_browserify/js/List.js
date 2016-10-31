var React = require('react');

var Img = require('./Img.js')
var List = React.createClass({
	render:function(){
		return(
			<div>
				this is List 
				<div>
					this test img
					<Img/>
				</div>
			</div>
		);
	}
});

module.exports = List