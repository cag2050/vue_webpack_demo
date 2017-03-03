/**
 * Created by cag on 2017/2/25.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');

var baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
    //entry: path.resolve(__dirname, '../app/index/index.js'),
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
});
