/**声明页面list部分  开始**/
var React = require('react');
var ReactDOM = require('react-dom');
var SmashGoldEggOne = require('./SmashGoldEggOne.js');

var ComponentList = React.createClass({
	render:function(){
		var _css = this.CSS;
		return(
			<div style={_css.list}>
				<div style={_css.list_div_1}>
					<div><img className="img_1" style={_css.list_img_1} src={"img/List_img/list_1.png"}/></div>
					<div><img className="img_2" style={_css.list_img_2} src={"img/List_img/list_2.png"}/></div>
				</div>
				
				<div style={_css.list_div_2}>
					<div><img style={_css.list_img_2} src={"img/List_img/list_3.png"}/></div>
					<div><img style={_css.list_img_1} src={"img/List_img/list_4.png"}/></div>
				</div>
			</div>
		);
	},
	componentDidMount:function(){
		$(".img_1").bind('touchstart',function(){
			$("#share").slideDown('slow');
			console.log("显示分享页面");
		});
		
		$(".img_2").bind('touchstart',function(){
			console.log("砸金蛋!");
			ReactDOM.unmountComponentAtNode(document.getElementById('banner'));
			ReactDOM.unmountComponentAtNode(document.getElementById('header'));
			ReactDOM.unmountComponentAtNode(document.getElementById('list'));
			ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
			//渲染砸金蛋组件;
			ReactDOM.render(<SmashGoldEggOne/>,document.getElementById('banner'));
		});
		
	}
});
ComponentList.prototype.CSS={
	list:{
		width:"100%",
		height:"5.9rem",
		backgroundColor:"rgb(238,238,238)",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	list_div_1:{
		width:"3.38rem",
		height:"5.52rem",
	},
	list_div_2:{
		width:"3.38rem",
		height:"5.52rem",
		marginLeft:"0.13rem"
	},
	
	list_img_1:{
		width:"3.38rem",
		height:"1.74rem"
	},
	list_img_2:{
		width:"3.38rem",
		height:"3.58rem"
	},
	
};
/**声明页面list部分  开始**/
module.exports = ComponentList;
