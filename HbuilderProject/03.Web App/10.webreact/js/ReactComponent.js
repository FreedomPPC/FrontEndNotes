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
		var _style=this.CSS;
		return(
			<div style={_style._style}>
			   <img style={_style._img_stlye} src={_img}/>
			</div>
		);
	}
});
ComponentHeader.prototype.CSS={
	_style:{
			width:"100%",
			height:"1rem",
			backgroundColor:"rgb(228,54,107)",
			overflow:"hidden",
			display:"flex",
			justifyContent:"center",
			alignItems:"center"
	},
     _img_stlye:{
			display:"block",
			width:"2.6rem",
			height:"0.46rem"
	}
}

/**声明页面头部  结束**/


/**声明页面搜索框  开始**/
var ComponentSearch=React.createClass({
	render:function(){
		var _style=this.CSS;
		var _img="img/search-img.png";
		return(
			<div>
			   <section style={_style.search}>
				<div style={_style.searchbox}>
				   <img style={_style.searchimg} src={_img}/>
				   <input style={_style.searchinput} type="text" placeholder="请输入搜索内容"/>
				</div>
			</section>
			</div>
		);
	}
});
ComponentSearch.prototype.CSS={
	search:{
		width:"100%",
		height:"0.88rem",
		backgroundColor:"rgb(82,82,90)",
		overflow:"hidden"
	},
	searchbox:{width:"5.9rem",
		height: "0.54rem",
		backgroundColor: "#FFFFFF",
		borderRadius:"0.27rem",
		margin:"0.2rem auto",
		overflow: "hidden"
    },
    searchimg:{
    	display: "block",
        float: "left",
        width:"0.44rem",
        height: "0.46rem",
        marginLeft: "0.12rem",
        marginTop:"0.07rem"
    },
    searchinput:{
    	display: "block",
        float: "left",
    	marginLeft:"0.13rem",
        width:"4.97rem",
        height: "0.46rem",
        border: "none",
        outline: "none",
        fontSize: "0.24rem",
        lineHeight: "0.46rem",
        marginTop:"0.07rem",
        color:"rgb(82,82,90)"
    }
	
}


/**声明页面搜索框  结束**/

/**声明页面banner  开始**/
//1.拆分父子组件
//2.react life circle函数中ajax获取数据
//3.数据传入子组件
//4.父组件中叠加循环子组件个数 放到页面
var ComponentBanner=React.createClass({
	getDefaultProps:function(){
		//配置数据源
		return{source:'http://datainfo.duapp.com/shopdata/getBanner.php'}
	},
	getInitialState:function(){
		return{result:[]}
	},
	componentWillMount:function(){
		var that=this;
		$.ajax({
			type:"get",
			url:this.props.source,
			dataType:"jsonp",
			async:false,
			success:function(data){
				console.log(data);
				that.setState({result:data});
			}
		});
	},
	render:function(){
		var _style=this.CSS;
		//遍历数据 控制子组件叠加
		var temp=[];//子组件叠加后的jsx模板
		var _state=this.state.result;//获取在will mount中存起来数据
		for(var i=0;i<_state.length;i++){
			console.log(_state[i]);
			temp.push(<ComponentBannerItem name={_state[i]}/>);
		}
		return(
			<div style={_style.banner}>
			    <div className="swiper-container">
				  <div className="swiper-wrapper">
				     {temp}
				    </div>
				   <div className="swiper-pagination"></div>
			     </div>
			</div>
		);
	},
	//在父组件加载完毕的地方 使用componentDidMount
	componentDidUpdate:function(){
		  var swiper=new Swiper('.swiper-container',{
			    		autoplay:1000,
			    		pagination : '.swiper-pagination'
		  });
		
	}
});
ComponentBanner.prototype.CSS={
	banner:{
	     width:"100%",
         height: "2.5rem"
	},
	img:{
		display: "block",
        width:"100%",
        height: "2.5rem"
	}
	
}
/**声明页面banner  结束**/

//banner中循环数据的子组件 开始
var ComponentBannerItem=React.createClass({
	render:function(){
		console.log(this.props.name);
		var _img=JSON.parse(this.props.name.goodsBenUrl)[0];
		var img={display: "block",width:"100%",height: "2.5rem"};
		return(
			<div className="swiper-slide">
			     <img style={img} className="swiper-img" src={_img}/>
		    </div>
		);
	},
	componentDidMount:function(){
		console.log("did mount");
		
	}
});
//banner中循环数据的子组件 结束




/**声明页面list  开始**/
//1.做数据交互-------1.前后端联调
//2.数据对接 3.前后端功能集成
//思路:1.实现父子附件的分离---父组件(请求data),子组件(解析)
//思路:2.可以在父组件中,声明周期函数中发起ajax请求,得到数据以后,先存在父组件的state中,再把state作为属性传递给组件
//思路:3.是不是可以在子组件中打印和解析数据
//思路：4.在父组件中控制子组件叠加的次数,最后将叠加结果放在页面中
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
		var _css=this.CSS;
		
		var _state=this.state.list;//获取willmount中存储的数据
		var _temp=[];
		for(var i=0;i<_state.length;i++){//遍历 1.每条数据传递给子组件  2.循环叠加子组件个数
			console.log(_state[i]);
			_temp.push(<ComponentListItem name={_state[i]}/>);
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
	render:function(){
		console.log(this.props.name);
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
							<img style={_css.img} src={this.props.name.goodsListImg}/>
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

ReactDOM.render(<ComponentLayout/>,document.body);
ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
ReactDOM.render(<ComponentSearch/>,document.getElementById("search"));
ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
ReactDOM.render(<ComponentList/>,document.getElementById("list"));
ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));
