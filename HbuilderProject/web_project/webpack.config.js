module.exports = {
	
	entry:'./component/APP.js',
	
    output:{
    	path:'./js',                    //输出路径;
    	filename:'app.min.js',                //输出名字;
    },
    
    module:{
    	//定义使用哪种loader
    	loaders:[				
    		{
    			test:/\.js$/,       
    			loader:'jsx-loader' 
    		}
    	
    	]
    }

}