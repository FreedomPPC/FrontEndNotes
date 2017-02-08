module.exports = {
  entry: './js/main.js',
  output: {
    path:'./dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel?presets=es2015'
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css']
        },
        {
            test: /\.less$/,
            loaders: ['style', 'css', 'less'],
        },
    ]
  }
};
