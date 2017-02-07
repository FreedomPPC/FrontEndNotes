var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var webpack  = require("webpack")

var webconfig = {
  devtool: '#eval-source-map',
  entry: {
      app: ['webpack-hot-middleware/client?noInfo=true&reload=true','./src/start.js'],
      vendor:["jquery"]
  },

  output: {
    path: '/',
    publicPath: "/",
    filename: 'js/[name].js',
    chunkFilename: "js/[name].min.js"
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
              name: 'img/[path][name].[hash].[ext]'
            }
          },

          {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'file',
            query: {
              limit: 10000,
              name: 'fonts/[name].[hash].[ext]'
            }
          },

          {
            test: /\.css?$/,
            loader: ExtractTextPlugin.extract("vue-style-loader", "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]") // 处理css
          }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
        $ : "jquery",
        jQuery : "jquery",
        "window.jQuery" : "jquery"
    }),
        // 提取依赖的jQuery通用插件
    new webpack.optimize.CommonsChunkPlugin({
        name : "vendor",
        minChunks : Infinity
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    }),

    new ExtractTextPlugin("css/[name].css"),	//单独使用style标签加载css并设置其路径
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './tpl.html',
      // favicon:"favicon.ico",
      inject: true
    })
  ]
}



module.exports = webconfig
