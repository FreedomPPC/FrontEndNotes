module.exports = {
	//编写webpack 代替(gulp+browserify);
	//基于配置的构建工具;
	
	
	//1.配置入口文件的读入;通过entry;
	entry:'./js/ReactComponent.js',
	
	//2.配置输出参数;输出最终被webpack,处理合并后的的代码;
    output:{
    	path:'./js',                    //输出路径;
    	filename:'app.min.js',                //输出名字;
    },
    
    
    //配置使用什么loader来处理我们引入的入口文件;
    module:{
    	//定义使用哪种loader
    	loaders:[				//定义数组的原因是我们项目中不止用一种加载器;
    		{
    			test:/\.js$/,       //使用的是正则,校验读入文件格式,类型;
    			loader:'jsx-loader'  //指的是我们使用的具体的加载器;
    		}
    		//,
//  		{
//  			test:/\.css$/,
//  			loader:'css-loader'
//  		}//webpack处理css文件是将css变成js,不好处理,所以还是不建议用webpack处理css;
    	]
    }

}


//2.测试model;
//module.exports={
//	entry:'./model/app.js',
//	output:{
//		path:'./model',  //输出路径;
//		filename:'index.js',   //文件名字;
//		
//	},
//	module:{
//		loaders:[{
//			test:/\.js$/,
//			loader:'jsx-loader'
//		}
//		]
//	}
//}
