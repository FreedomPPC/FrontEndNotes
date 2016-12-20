var webpack = require('webpack');
module.exports = {
    //唯一入口   __dirname是node.js的一个全局变量,它指向当前执行脚本所在的目录;
    entry:__dirname + "/app/app.js",
    //输出
    output:{
        path:__dirname + "/public",//打包后的文件存放的地方
        filename:"bundle.js"//打包后输出文件的文件名
    },
    devtools:"eval-source-map",//配置生成Source maps,选择合适的选项;

    //配置本地服务器webpack-dev-server
    devServer:{
        //本地服务器所加载的页面所在的目录,一般指向根目录下的index.html文件,这里把index.html放在public下;
        contentBase:'./public',
        colors:true,//终端中输出结果为彩色,
        historyApiFallback:true,//不跳转
        inline:true//实时刷新
    },
    //配置文件中加入加载器;
    module:{
        loaders:[
          {
            test: /\.vue$/,
            loader: "vue"
          },
          {
              test:/\.json$/,
              loader:"json",
          },
          {
              test:/\.js$/,
              exclude:/node_modules/,
              loader:'babel',
          },
          {
              test:/\.css$/,
              loader: "style-loader!css-loader?modules"//添加对样式表的处理
          }
        ]
    },
    plugins: [
     new webpack.BannerPlugin('This file is created by haoguo94D')
    ],
}
