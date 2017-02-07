var React=require('react');
var ReactDOM=require('react-dom');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentSearch=require('./ComponentSearch.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentFooter=require('./ComponentFooter.js');
/**声明这个页面的布局容器  开始**/
var ComponentLayout=React.createClass({
	render:function(){
		return(
			<div>
			   <div id="header"></div>
			   <div id="search"></div>
			   <div id="banner"></div>
			   <div id="list"></div>
			   <div id="footer"></div>
			</div>
		);
	}
});
/**声明这个页面的布局容器  结束**/

ReactDOM.render(<ComponentLayout/>,document.body);

ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
ReactDOM.render(<ComponentSearch/>,document.getElementById("search"));
ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
ReactDOM.render(<ComponentList/>,document.getElementById("list"));
ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));
