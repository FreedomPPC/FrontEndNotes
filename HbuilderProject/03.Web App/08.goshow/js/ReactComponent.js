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

/**声明页面头部  开始**/
var ComponentHeader=React.createClass({
	render:function(){
		var _img="img/header-img.png";
		var _style={
			width:"100%",
			height:"1rem",
			backgroundColor:"rgb(228,54,107)",
			overflow:"hidden",
			display:"flex",
			justifyContent:"center",
			alignItems:"center"
		};
		var _img_stlye={
			display:"block",
			width:"2.6rem",
			height:"0.46rem"
		};
		return(
			<div style={_style}>
			   <img style={_img_stlye} src={_img}/>
			</div>
		);
	}
});

/**声明页面头部  结束**/


/**声明页面搜索框  开始**/
var ComponentSearch=React.createClass({
	render:function(){
		return(
			<div>
			    this is search comp!
			</div>
		);
	}
});


/**声明页面搜索框  结束**/

/**声明页面banner  开始**/
var ComponentBanner=React.createClass({
	render:function(){
		return(
			<div>
			    this is banner comp!
			</div>
		);
	}
});
/**声明页面banner  结束**/


/**声明页面list  开始**/
var ComponentList=React.createClass({
	render:function(){
		return(
			<div>
			    this is list comp!
			</div>
		);
	}
});
/**声明页面list  结束**/

/****
 * 定义新组件
 */
var NewComponent=React.createClass({
	render:function(){
		return(
			<div>
			  *****this is be changed comp****
			</div>
		);
	}
});


/**声明页面footer  开始**/
var ComponentFooter=React.createClass({
	handleClick:function(event){
		var _title=event.target.getAttribute("title");
		switch(_title){
			case "index":
			  //卸载
			  ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			  ReactDOM.unmountComponentAtNode(document.getElementById("list"));
			  //装入
			  ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
			  ReactDOM.render(<ComponentList/>,document.getElementById("list"));
			break;
			
			case "classfy":
			  //卸载banner ,卸载list
			  ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			  ReactDOM.unmountComponentAtNode(document.getElementById("list"));
			  //装入新的组件
			  ReactDOM.render(<NewComponent/>,document.getElementById("banner"));
			  
			break;
		}
	},
	render:function(){
		var _s=this.CSS;
		return(
			<div style={_s.div}>
			   <div style={_s._div} onClick={this.handleClick} title="index">首页</div>
			   <div style={_s._div} onClick={this.handleClick} title="classfy">分类</div>
			   <div style={_s._div} title="shopcar">购物车</div>
			   <div style={_s._div} title="myshow">我的秀</div>
			   <div style={_s._div} title="more">更多</div>
			</div>
		);
	}
});
ComponentFooter.prototype.CSS={
	div:{
		display:"flex",
		position:"fixed",
		bottom:"0",
		width:"100%",
		height:"1rem",
		backgroundColor:"rgb(72,72,80)"
	},
	_div:{
		width:"20%",height:"100%",lineHeight:"1rem",textAlign:"center",fontSize:"0.24rem"
	}
}
/**声明页面footer  结束**/

ReactDOM.render(<ComponentLayout/>,document.body);
ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
ReactDOM.render(<ComponentSearch/>,document.getElementById("search"));
ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
ReactDOM.render(<ComponentList/>,document.getElementById("list"));
ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));