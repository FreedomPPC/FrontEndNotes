/**声明页面list  开始**/
//1.做数据交互-------1.前后端联调
//2.数据对接 3.前后端功能集成
//思路:1.实现父子附件的分离---父组件(请求data),子组件(解析)
//思路:2.可以在父组件中,声明周期函数中发起ajax请求,得到数据以后,先存在父组件的state中,再把state作为属性传递给子组件
//思路:3.是不是可以在子组件中打印和解析数据
//思路：4.在父组件中控制子组件叠加的次数,最后将叠加结果放在页面中
var React=require('react');
var ReactDOM=require('react-dom');
var ComponentDetail=require('./ComponentDetail.js');
var ComponentList=React.createClass({
	getDefaultProps:function(){
		return{
			//定义组件的ajax数据源
			source:'http://datainfo.duapp.com/shopdata/getGoods.php'
		}
	},
	getInitialState:function(){
		return{
			//定义空的数组(state)存储ajax得到的数据
			list:[]
		}
	},
	componentWillMount:function(){
		var that=this;//保存reactjs实例this关键字
		$.ajax({
			type:'get',
			url:this.props.source,//this.props.source
			async:false,
			dataType:'jsonp',
			success:function(data){
				//console.log(data);
				that.setState({list:data});
			}
		});
	},
	render:function(){
		console.log("this out param is&&&");
		console.log(this.props.name);
		
		var _css=this.CSS;
		
		var _state=this.state.list;//获取willmount中存储的数据
		var _temp=[];
		
		//用变量去接受传入到子组件里面的数据
		var child=null;
		
		//判断当前得到的props 点击搜索以后 传入数据   || 和默认state 组件初始化得到的数据 
		if(this.props.name==""||this.props.name==null||typeof(this.props.name)=="undefined"){
			child=_state;
		}else{
			child=this.props.name;
		}
		
		
		for(var i=0;i<child.length;i++){//遍历 1.每条数据传递给子组件  2.循环叠加子组件个数
			_temp.push(<ComponentListItem key={i} name={child[i]}/>);
		}
		return(
			<div style={_css.cxt}>
			    <div style={_css.list}>
					  {_temp}
				</div>
			</div>
		);
	}
});
ComponentList.prototype.CSS={
	list:{
		width:"100%",
		bottom:"1rem"
	},
	listitem:{
		width:"100%",
		height: "2.2rem",
		borderBottom:"2px solid rgb(171,171,171)"
	},
	listimg:{
		float: "left",
		width:"1.76rem",
		height: "1.76rem",
		marginTop:"0.2rem",
		marginLeft:"0.15rem",
		overflow: "hidden"
	},
	img:{
		display: "block",
		width:"100%",
		height: "100%",
	},
	itemdesc:{
		float: "left",
		width:"4.1rem",
		height:"1.76rem",
		marginTop:"0.2rem",
		marginLeft: "0.2rem",
		position:"relative"
	},
	goodsName:{
		fontSize:"0.3rem",
		color: "#acacac",
		fontWeight: "600",
		marginTop:"0.2rem"
	},
	goodsPrice:{
		fontSize: "0.28rem",
		color: "rgb(251,169,192)",
		fontWeight: "600",
		marginTop:"0.2rem"
	},
	goodsDiscount:{
		fontSize: "0.28rem",
		color: "#000000",
		fontWeight: "600",
		marginTop:"0.2rem"
	},
	goodsImg:{
		float: "left",
	    width: "1.2rem",
	    height: "0.54rem",
	},
	goodsimg:{
		display:"block",
        width: "1.2rem",
        height:"0.54rem",
        position: "absolute",
        right: "0.1rem",
        bottom:"0rem"
	}
	
}
/**声明页面list  结束**/

/**数据显示的子组件----渲染模板 开始**/
var ComponentListItem=React.createClass({
	getDefaultProps:function(){
		//flux
		return{
			url:'http://datainfo.duapp.com/shopdata/getGoods.php?goodsID='
		}
	},
	clickHandle:function(event){
		var goodsId=event.target.getAttribute("title");
		console.log(goodsId);
		//得到商品id
		//1.ajax获取详情数据
		$.ajax({
			type:'get',
			url:this.props.url+goodsId,
			dataType:'jsonp',
			async:true,
			success:function(data){
				//2.数据放到详情的组件中(组件)
				console.log(data);
				//卸载组件 banner,list,footer
				ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
				ReactDOM.unmountComponentAtNode(document.getElementById("list"));
				ReactDOM.unmountComponentAtNode(document.getElementById("footer"));
				//ComponentDetail
				ReactDOM.render(<ComponentDetail/>,document.getElementById("banner"));
			}
		});
		
		
	},
	render:function(){
		console.log('商品列表页this.props.name'+this.props.name);
		var name=this.props.name.goodsName;
		if(name.length>15){
			name=name.substring(0,8)+".....";
		}else{
			name=name;
		}
		var _css=this.CSS;
		return(
			<div style={_css.listitem}>
						<div style={_css.listimg}>
							<img onClick={this.clickHandle} title={this.props.name.goodsID} 
							     style={_css.img} src={this.props.name.goodsListImg}/>
						</div>
						<div style={_css.itemdesc}>
							<div style={_css.goodsName}>{name}</div>
							<div style={_css.goodsPrice}>￥<span>{this.props.name.price}</span></div>
							<div style={_css.goodsDiscount}>{this.props.name.discount}</div>
							<div style={_css.goodsImg}>
							    <img style={_css.goodsimg} src="img/shopcar.png"/>
							</div>
						</div>
			</div>
		);
	}
});
ComponentListItem.prototype.CSS={
	list:{
		width:"100%",
		bottom:"1rem"
	},
	listitem:{
		width:"100%",
		height: "2.2rem",
		borderBottom:"2px solid rgb(171,171,171)"
	},
	listimg:{
		float: "left",
		width:"1.76rem",
		height: "1.76rem",
		marginTop:"0.2rem",
		marginLeft:"0.15rem",
		overflow: "hidden"
	},
	img:{
		display: "block",
		width:"100%",
		height: "100%",
	},
	itemdesc:{
		float: "left",
		width:"4.1rem",
		height:"1.76rem",
		marginTop:"0.2rem",
		marginLeft: "0.2rem",
		position:"relative"
	},
	goodsName:{
		fontSize:"0.3rem",
		color: "#acacac",
		fontWeight: "600",
		marginTop:"0.2rem"
	},
	goodsPrice:{
		fontSize: "0.28rem",
		color: "rgb(251,169,192)",
		fontWeight: "600",
		marginTop:"0.2rem"
	},
	goodsDiscount:{
		fontSize: "0.28rem",
		color: "#000000",
		fontWeight: "600",
		marginTop:"0.2rem"
	},
	goodsImg:{
		float: "left",
	    width: "1.2rem",
	    height: "0.54rem",
	},
	goodsimg:{
		display:"block",
        width: "1.2rem",
        height:"0.54rem",
        position: "absolute",
        right: "0.1rem",
        bottom:"0rem"
	}
	
}
/**数据显示的子组件----渲染模板 结束**/
module.exports=ComponentList;