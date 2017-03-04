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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new HtmlWebpackPlugin({
            filename: '../output/index/index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            chunks: ['index'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: '../output/vue_resource/index.html',
            template: path.resolve(__dirname, '../app/vue_resource/index.html'),
            chunks: ['vue_resource'],
            inject: true
        })
    ]
});
console.log('entries =');
console.log(baseWebpackConfig.entry);
