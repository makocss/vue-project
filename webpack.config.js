/*----*/
const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;

module.exports = {
	entry: {
		main: './src/entry.js',
		vendor: ['vue', 'vue-router']
	},
	output: {
		filename: '[name].[chunkhash:5].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
		},{
			test: /\.vue$/,
			loader: 'vue-loader'
		},{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},{
			test: /\.jpg$/,
			loader: 'file-loader'
		},{
			test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			loader: 'url-loader?limit=100000'
		}]
	},
	plugins: [
	    new HTMLPlugin({
			title: 'webpack项目',
			template: 'index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new ExtractTextPlugin({
			filename: 'styles.[chunkhash:5].css'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env)
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
}