/**声明页面banner  开始**/
//1.拆分父子组件
//2.react life circle函数中ajax获取数据
//3.数据传入子组件
//4.父组件中叠加循环子组件个数 放到页面
var React=require('react');
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
module.exports=ComponentBanner;