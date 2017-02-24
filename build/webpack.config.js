/**
 * Created by cag on 2017/2/25.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('__dirname =');
console.log(__dirname);
console.log(path.resolve(__dirname, '../app/index/index.js'));

module.exports = {
    entry: path.resolve(__dirname, '../app/index/index.js'),
    output: {
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
};