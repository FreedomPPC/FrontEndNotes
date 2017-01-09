const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'app':'./main.js',
  },
  output:{
    filename: '[name]-[hash].js'
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
