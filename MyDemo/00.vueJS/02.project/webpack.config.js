var path  = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist/',
        filename: 'build.js',
    },
    devServer:{
        //本地服务器所加载的页面所在的目录,一般指向根目录下的index.html文件,这里把index.html放在public下;
        // contentBase:'./public',
        colors:true,//终端中输出结果为彩色,
        historyApiFallback:true,//不跳转
        inline:true//实时刷新
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
              test: /\.html$/,
              loader: 'vue-html'
            },
        ]
    }
}
