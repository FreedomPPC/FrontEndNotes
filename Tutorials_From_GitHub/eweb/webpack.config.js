var path = require('path')

var dist = path.resolve(__dirname, './dist');                       // 生产环境目标目录
var HtmlWebpackPlugin = require('html-webpack-plugin');             // html处理
var ExtractTextPlugin = require("extract-text-webpack-plugin");     // css 合并处理
var webpack  = require("webpack");

var webconfig = {
  entry: {
      app: './src/start.js',
      vendor:["jquery"]  // 第三方只引入jq
  },

  output: {
    path: dist,
    filename: '/js/[name].js',            // 定义好的entry 输出名称
    chunkFilename: "/js/[name].min.js"    // require.ensure 按需加载的时候  输出名称
  },

  resolve: {
    extensions: ['', '.js', '.vue'],
    root: path.resolve("./src"),          // 处理根目录
    alias: {

    }
  },
  module: {
    noParse:['jquery'],                  // 忽略对已知文件解析  提高编译速度
    loaders: [
          {
            test: /\.vue$/,
            loader: 'vue'
          },

          {
            test: /\.js$/,
            loader: 'babel',
            cacheDirectory: true,
            query: {
              presets: ['es2015', 'stage-2']
            },
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
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'file',
            query: {
              limit: 10000,
              name: '/img/[name].[hash].[ext]'
            }
          },

          {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'file',
            query: {
              limit: 10000,
              name: '/fonts/[name].[hash].[ext]'
            }
          },

          {
            test: /\.css?$/,
            // loaders: [
            //         'vue-style',
            //         'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            // ]
           loader: ExtractTextPlugin.extract("vue-style-loader", "css?modules&importLoaders=1&localIdentName=[hash:base64:5]") // 处理css
          }
    ]
  },

  plugins: [


    new webpack.ProvidePlugin({                             // 全局依赖jQuery
        $ : "jquery",
        jQuery : "jquery",
        "window.jQuery" : "jquery"
    }),

    new webpack.optimize.CommonsChunkPlugin({              // 提取依赖的jQuery通用插件
        name : "vendor",
        minChunks : Infinity
    }),
	  //压缩代码
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      output: {
        comments: false,                                  // remove all comments
      },
      except: ['$super', '$', 'exports', 'require']	      //排除关键字
    }),

    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    }),

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.DedupePlugin(),                // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块

    // new webpack.HotModuleReplacementPlugin(),

    new ExtractTextPlugin("/css/[name].css"),        	  // 输出css并设置其路径

    new webpack.NoErrorsPlugin(),                       // 用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'tpl.html',
      hash: true,
      inject: true,
      // favicon:"favicon.ico",
      minify:{	//压缩HTML文件
      		removeComments:true,	//移除HTML中的注释
      		collapseWhitespace:true	//删除空白符与换行符
      }
    })

  ]
}



module.exports = webconfig
