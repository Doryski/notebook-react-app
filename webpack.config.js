const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/build'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'eslint-loader',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|jpg)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
}
