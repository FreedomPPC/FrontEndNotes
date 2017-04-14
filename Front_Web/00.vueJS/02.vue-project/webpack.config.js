const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry:'./app/app.js',
	output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename: 'build.js'
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules'),
    },
		resolve:{
			//extensions配置 是不用写文件后缀名；
			extensions:['','.vue','.js'],
			//相对路径的简写；用参数存起来
			alias:{
				home:'./Home',
			}

		},
	devtool: '#eval-source-map',
	devServer:{
        //本地服务器所加载的页面所在的目录,一般指向根目录下的index.html文件,这里把index.html放在public下;
        contentBase:'./public',
        colors:true,//终端中输出结果为彩色,
        historyApiFallback:true,//不跳转
        inline:true//实时刷新
    },
	module:{
		loaders: [
	      {
	        test: /\.vue$/,
	        loader: 'vue'
	      },
	      {
	        test: /\.js$/,
	        loader: 'babel',
	        exclude: /node_modules/
	      },
	      {
	        test: /\.json$/,
	        loader: 'json'
	      },
	      {
	        test: /\.html$/,
	        loader: 'vue-html'
	      },
	      {
	        test: /\.(png|jpg|gif|svg)$/,
	        loader: 'url',
	        query: {
	          limit: 10000,
	          name: '[name].[ext]?[hash]'
	        }
	      }
	    ]
	},
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
