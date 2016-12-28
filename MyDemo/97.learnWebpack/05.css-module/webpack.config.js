const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './main.js',
  output:{
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel!jsx-loader',
      },
      {
        test: /\.css$/,
        loader: 'style!css?module'//css模块化
      }
    ]
  }
}
