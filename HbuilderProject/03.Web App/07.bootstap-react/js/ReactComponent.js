//需求 基于boostrap 和react构建一个企业站的内容
//风格 上中下三个模块---创建三个组件出来
//1.想把不同组件都放在页面中不同的位置   现在页面上有个结构依靠

//2.将页面结构看成是组件，在把我们要渲染进去的组件 嵌套进去----通过这种方式可以快速构建页面
//就是将页面按照块,布局划分出若干个组件, 每个react组件携带了 css,js,html,将这些元素耦合在一起
//所以react组件化开发和传统模式差异巨大,亮点就是每个js文件||每个组件变量 就包含了具体html(jsx),css(inner css),js(inner js)

//目的为了什么:
//1.为了保障样式css(行内)稳定,不受外部影响,系统集成(组件化显示优势)
//2.数据流向从服务端 流入到组件中(组件中可以有一套解析数据方法,这样可以保证组件功能的稳定)

//虚拟dom,jsx,单项数据流 具体案例

//问题?点击按钮,进行组件切换的时候，如何实现？
//需要去涉及到组件的卸载和新组件的装入(载入)
//ReactDOM.unmountComponentAtNode(参数(组件所在的位置));

var ComponentLayout=React.createClass({
	render:function(){
		return(
		  <div>	
			<div id="header">
			    
			</div>
		    <div id="cxt">
		        
		    </div>
		    <div id="footer"></div>
		  </div>  
		);
	}
});

var ComponentHeader=React.createClass({
	render:function(){
		return(
			<ul className="nav nav-pills">
			  <li role="presentation" className="active"><a href="#">Home</a></li>
			  <li role="presentation"><a href="#">Profile</a></li>
			  <li role="presentation"><a href="#">Messages</a></li>
			</ul>
		);
	}
});

var ComponentContext=React.createClass({
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

ReactDOM.render(<ComponentContext/>,document.getElementById("cxt"));

setTimeout(function(){
	//这种的确可以卸载组件---被卸载的组件 前提是一定要被ReactDOM.render()方法渲染过
	var flg=ReactDOM.unmountComponentAtNode(document.getElementById("header"));
	console.log(flg);
	
},5000);

//ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));

//ReactDOM.render(<ComponentContext/>,document.getElementById("cxt"));

