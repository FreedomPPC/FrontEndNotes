/**声明页面footer  开始**/
var React=require('react');
var ReactDOM=require('react-dom');
var NewComponent=require('./NewComponent.js');

var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentShopCar=require('./ComponentShopCar.js');

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
			
			case 'shopcar':
			 //卸载banner ,卸载list
			  ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
			  ReactDOM.unmountComponentAtNode(document.getElementById("list"));
			   //装入新的组件
			  ReactDOM.render(<ComponentShopCar/>,document.getElementById("banner"));
		}
	},
	render:function(){
		var _s=this.CSS;
		return(
			<div style={_s.div}>
			   <div style={_s._div} onClick={this.handleClick} title="index">首页</div>
			   <div style={_s._div} onClick={this.handleClick} title="classfy">分类</div>
			   <div style={_s._div} onClick={this.handleClick} title="shopcar" title="shopcar">购物车</div>
			   <div style={_s._div} onClick={this.handleClick} title="myshow" title="myshow">我的秀</div>
			   <div style={_s._div} onClick={this.handleClick} title="more" title="more">更多</div>
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
module.exports=ComponentFooter;