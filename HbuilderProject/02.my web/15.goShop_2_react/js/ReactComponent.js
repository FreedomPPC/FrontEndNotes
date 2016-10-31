/*声明这个页面的布局容器,开始*/
var ComponentLayout = React.createClass({
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
/*声明这个页面的布局容器,结束*/

/*声明这个页面的头部,开始*/
var ComponentHeader = React.createClass({
	render:function(){
		var _img = "img/header-img.png";
		var _div_style = {
			width:"100%",
			height:"1rem",
			backgroundColor:"rgb(228,54,107)",
			overflow:"hidden",
			display:"flex",
			justifyContent:"center",
			alignItems:"center"
		};
		var _img_style = {
			display:"block",
			width:"2.6rem",
			height:"0.46rem",
			
		}
		return(
			<div style={_div_style}>
				<img src= {_img} style={_img_style}/>
			</div>
			
		);
	}
});
/*声明这个页面的头部,结束*/

/*声明这个页面的搜索框,开始*/
	var ComponentSearch = React.createClass({
	render:function(){
		return(
			<div>
				<div id="search">this is search component</div>
			</div>
		);
	}
});
	
/*声明这个页面的搜索框,结束*/

/*声明这个页面的Banner,开始*/
	var ComponentBanner = React.createClass({
	render:function(){
		return(
			<div>
				<div id="Banner">this a banner component</div>
			</div>
		);
	}
});
	
/*声明这个页面的Banner,结束*/

/*声明这个页面的List,开始*/
	var ComponentList = React.createClass({
	render:function(){
		return(
			<div>
				<div id="list">this a list component</div>
			</div>
		);
	}
});
	
/*声明这个页面的List,结束*/

/*声明这个页面的footer,开始*/
var NewComponent = React.createClass({
	render:function(){
		return(
			<div>
				this is a new component
			</div>
		);
	}
});
var ComponentFooter = React.createClass({
	handleOnClick:function(event){
		var _title = event.target.getAttribute("title");
		switch(_title){
			case "index":
			//卸载
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			ReactDOM.unmountComponentAtNode(document.getElementById("list"));
			//载入
			ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
			ReactDOM.render(<ComponentList/>,document.getElementById("list"));
			break;
			
			case "classify":
			//卸载banner,卸载list;
			ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			ReactDOM.unmountComponentAtNode(document.getElementById("list"));
			//载入新组件;
			ReactDOM.render(<NewComponent/>,document.getElementById("list"));
			
			
		}
	},
	render:function(){
		var _s = this.STYLE;
		return(
			<div style={_s._footer} id="footer">
					//调用事件,要用this.onclick;
					<div style={_s._footer_div} onClick={this.handleOnClick} title="index">首页</div>
					<div style={_s._footer_div} onClick={this.handleOnClick} title="classify">分类</div>
					<div style={_s._footer_div} title="shopcar">购物车</div>
					<div style={_s._footer_div} title="myshow">我的秀</div>
					<div style={_s._footer_div} title="more">更多</div>
			</div>
		);
	}
});

ComponentFooter.prototype.STYLE={
	_footer:{
		display:"flex",
		position:"fixed",
		bottom:"0",
		width:"100%",
		height:"1rem",
		backgroundColor:"rgb(72,72,80)"
	},
	_footer_div:{
		width:"20%", 
		height:"100%",
		fontSize:"0.24rem",
		lineHeight:"1rem",
		textAlign:"center"
	}
}
	
/*声明这个页面的footer,结束*/
ReactDOM.render(<ComponentLayout/>,document.body);
ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
ReactDOM.render(<ComponentSearch/>,document.getElementById("search"));
ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
ReactDOM.render(<ComponentList/>,document.getElementById("list"));
ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));

