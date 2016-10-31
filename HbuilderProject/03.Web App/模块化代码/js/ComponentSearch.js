/**声明页面搜索框  开始**/
var React=require('react');
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
module.exports=ComponentSearch;