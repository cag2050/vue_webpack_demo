/**
 * Created by cag on 2017/2/25.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
// �����������
var config = require('./webpack.config');

//config.vue = {
//    loaders: {
//        css: ExtractTextPlugin.extract("css")
//    }
//};

config.plugins = [
    // ��ȡcssΪ���ļ�
    new ExtractTextPlugin("../[name].[contenthash].css"),

    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
];

module.exports = config;