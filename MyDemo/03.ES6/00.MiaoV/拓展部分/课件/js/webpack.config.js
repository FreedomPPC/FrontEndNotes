module.exports = {
	entry:{
		main:"./es6/main.js"
	},
	output:{
		path:__dirname,
		filename:"./es5/[name].js"
	},
	module: {
		loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" } ]
	}
}