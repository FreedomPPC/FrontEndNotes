/*
 * 
 	组件开发的目的:
 	1.为了确保样式css(行内)稳定;不受外部影响;系统集成(组件化显示优势);
 	2.数据流向 从服务器端流入到组件中;(组件中可以有一套解析组件的方法;这样可以保证组件功能的稳定);
 	
 */
//虚拟dom;jsx;单项数据流具体案例;

/*
 * 问题?点击按钮,进行组件切换的时候;如何实现?
 * 需要去涉及到组件的卸载和新组件的装入(载入);
 * ReactDOM.unmountComponentAtNode(document.body);
 
 * */

var ComponentLayout = React.createClass({displayName: "ComponentLayout",
	render:function(){
		return(
			React.createElement("div", null, 
				React.createElement("div", {id: "header"}
					
				), 
				React.createElement("div", {id: "ctx"}
					
				)
			)
		);
	}
});

var ComponentHeader = React.createClass({displayName: "ComponentHeader",
	render:function(){
		
		return(
			React.createElement("ul", {className: "nav nav-pills"}, 
			  React.createElement("li", {role: "presentation", className: "active"}, React.createElement("a", {href: "#"}, "Home")), 
			  React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#"}, "Profile")), 
			  React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#"}, "Messages"))
			)
		);
	}
});


var ComponentContext = React.createClass({displayName: "ComponentContext",
	render:function(){
		return(
			React.createElement("table", {className: "table"}, 
				React.createElement("thead", null, 
					React.createElement("tr", null, 
						React.createElement("th", null, "UserName"), 
						React.createElement("th", null, "UserName"), 
						React.createElement("th", null, "UserName")
					)
				), 
				
				React.createElement("tbody", null, 
					React.createElement("tr", null, 
						React.createElement("td", null, "UserName"), 
						React.createElement("td", null, "UserName"), 
						React.createElement("td", null, "UserName")
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(ComponentLayout, null),document.body);
ReactDOM.render(React.createElement(ComponentHeader, null),document.getElementById("header"));
ReactDOM.render(React.createElement(ComponentContext, null),document.getElementById("ctx"));

setTimeout(function(){
	//只能卸载渲染过得组件;
	var flag = ReactDOM.unmountComponentAtNode(document.getElementById("header"));
	console.log(flag);
	
},5000)
