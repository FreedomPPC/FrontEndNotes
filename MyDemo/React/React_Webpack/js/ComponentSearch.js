/**声明页面搜索框  开始**/
var React=require('react');
var ReactDOM=require('react-dom');
var ComponentList=require('./ComponentList.js');

var ComponentSearch=React.createClass({
	getDefaultProps:function(){
		return{
			//数据源地址 jsonp 只支持get
			source:'http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText='
		}
	},
	changeHandle:function(event){
		//1.获取文本框值
		var _text=event.target.value;
		console.log(_text);
		//2.请求数据
		$.ajax({
			type:"get",
			url:this.props.source+_text,
			async:true,
			dataType:"jsonp",
			success:function(data){
			   console.log("get search result");
			   console.log(data);
			   //3.显示数据{
				//1.banner卸载
				ReactDOM.unmountComponentAtNode(document.getElementById("banner"));
				ReactDOM.unmountComponentAtNode(document.getElementById("list"));
				//2.list组件
				//3.定义新组件 把数据传入 让新组件解析
				ReactDOM.render(<ComponentList name={data}/>,document.getElementById("list"));
				
		  	//}
			   
			   
			   
			}
		});
		
	},
	render:function(){
		var _style=this.CSS;
		var _img="img/search-img.png";
		return(
			<div>
			   <section style={_style.search}>
				<div style={_style.searchbox}>
				   <img style={_style.searchimg} src={_img}/>
				   <input onChange={this.changeHandle} style={_style.searchinput} type="text" placeholder="请输入搜索内容"/>
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
module.exports=ComponentSearch;