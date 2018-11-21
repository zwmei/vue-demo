/**
 * Created by wayne on 2018/10/22.
 */
const webpackBase = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const webpackCleanPlugin = require('clean-webpack-plugin');
const webpackMiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = webpackMerge(webpackBase, {
  mode: 'production',
  devtool: "inline-source-map",
  devServer: {
    contentBase: '../dist'
  },
  output: {
    filename: "js/[name].[contenthash].js",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: webpackMiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpackCleanPlugin(['dist/*'], {
      root: path.resolve(__dirname, '../')
    }),
    new webpackMiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: 'css/[id].[hash].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        }
      }
    }
  }
});