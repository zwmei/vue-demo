/**
 * Created by wayne on 2018/10/22.
 */
var webpack = require('webpack');
const webpackBase = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const webpackFriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const path = require('path');

module.exports = webpackMerge(webpackBase, {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: '../dist'
  },
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins:[
    new webpack.NoEmitOnErrorsPlugin(),
    new webpackFriendlyErrorsPlugin()
  ]
});