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

var ComponentLayout = React.createClass({
	render:function(){
		return(
			<div>
				<div id="header">
					
				</div>
				<div id="ctx">
					
				</div>
			</div>
		);
	}
});

var ComponentHeader = React.createClass({
	render:function(){
		
		return(
			<ul className="nav nav-pills">
			  <li role="presentation" className="active" ><a href="#">Home</a></li>
			  <li role="presentation" ><a href="#">Profile</a></li>
			  <li role="presentation"><a href="#">Messages</a></li>
			</ul>
		);
	}
});


var ComponentContext = React.createClass({
	render:function(){
		return(
			<table className="table">
				<thead>
					<tr>
						<th>UserName</th>
						<th>UserName</th>
						<th>UserName</th>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<td>UserName</td>
						<td>UserName</td>
						<td>UserName</td>
					</tr>
				</tbody>
			</table>
		);
	}
});

ReactDOM.render(<ComponentLayout/>,document.body);
ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
ReactDOM.render(<ComponentContext/>,document.getElementById("ctx"));

setTimeout(function(){
	//只能卸载渲染过得组件;
	var flag = ReactDOM.unmountComponentAtNode(document.getElementById("header"));
	console.log(flag);
	
},5000)
