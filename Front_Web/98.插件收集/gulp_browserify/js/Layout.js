var React = require('react');
var ReactDOM = require('react-dom');
//引入;
var List = require('./List.js');//同级菜单加一个./

var ComponentLayout = React.createClass({
	render:function(){
		return(
			<div>
				this is lay out 
				<List/>
			</div>
		);
	}
});
ReactDOM.render(<ComponentLayout/>,document.body);
