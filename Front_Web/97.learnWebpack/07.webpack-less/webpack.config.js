var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index',
        index2: './src/index2'
    },
    output: {
        publicPath: '../build/', //服务器根路径
        path: './build', //编译到当前目录
        filename: '[name].js' //编译后的文件名字
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'autoprefixer']
	        },
            {
                test: /\.less/,
                loaders: ['style', 'css', 'autoprefixer', 'less'],
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]'
	        },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=12000&name=[hash].[ext]'
	        }
        ]
    },
    plugins: [
			  new webpack.optimize.CommonsChunkPlugin('common.js') //将公用模块，打包进common.js
	  ]
};