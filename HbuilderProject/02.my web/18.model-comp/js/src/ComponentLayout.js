//模块化开发;
//1.首先将js拆分成若干个js文件;
//2.每个js文件都是功能独立的;
//3.不同的js文件之间存在调用关系(js文件的依赖);

//模块化开发;
//1 nodejs;
//2 

var ComponentLayout = React.createClass({
	render:function(){
		return(
			<div>
				this is layout
			</div>
		);
	}
});
ReactDOM.render(<ComponentLayout/>,document.body);
