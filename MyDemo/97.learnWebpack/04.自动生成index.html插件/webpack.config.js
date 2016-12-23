const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //第一步,只有一个入口文件
  // entry:__dirname+'/src/app.js',
  //=================================
  //第二步,多个入口文件
  entry:{
    pay: __dirname + '/src/app.js',
    check: __dirname + '/src/check.js'
  },
  output:{
    path:__dirname+'/dist/',
    filename:'[name].js',
  },
  plugins:[
    //if 只有单个html文件,多个入口js文件  单个html文件会引入两个打包出来的 文件,如果用chunks指定引入的文件就不一定了,
    //第一步,只是生成一个dis文件夹,文件夹里有index.html 和main.js;
    // new HtmlwebpackPlugin(),
    //======================================================
    //第二步,生成指定title和名字的html文件;
    // new HtmlwebpackPlugin({
    //   title: 'Hello World',
    //   filename: 'my_diy.html',
    // })
    //=======================================================
    //第三步,
    // new HtmlwebpackPlugin({
    //   chunks:['main'],//指定引入的js文件名
    //   title: 'Hello HtmlwebpackPlugin',
    //   filename: 'Hello HtmlwebpcakPlugin.html'
    // })
    //=======================================================
    //第四步,可以根据已有的html模板生成html
    new HtmlwebpackPlugin({
      // chunks:['check'],
      title: 'template html',
      filename: 'templateHtml.html',
      template: './template/template.html',
      inject:true,//如果设置成true,或者body,资源加载包放在body元素的底部, head将放在head元素中 inject:{ true|'head'|'body'|false }
      //压缩html文件
      minify:{
        removeComments:true,//移除html中的注释,
        collapseWhitespace:true,//删除空白符和换行符
      }
    })
  ]
}
