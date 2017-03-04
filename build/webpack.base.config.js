/**
 * Created by cag on 2017/2/25.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require('glob');

function getEntry(globPath) {
    var entries = {};
    glob.sync(globPath).map(function (entry) {
        var basename, tmp, pathname;
        basename = path.basename(entry, path.extname(entry));
        tmp = entry.split('/').splice(-3);
        // pathname = tmp.splice(1, 1) + '/' + basename+'/assets'; // 正确输出js和html的路径
        // pathname = tmp.splice(1, 1) + '/assets/index'; // 正确输出js和html的路径
        // pathname = tmp.splice(1, 1) + '/assets'; // 正确输出js和html的路径
        pathname = tmp.splice(1, 1); // 正确输出js和html的路径
        entries[pathname] = entry;
    });
    // console.log(entries);
    return entries;

}
var entries = getEntry('./app/**/*.js');

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../output'),
        publicPath: '..',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
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
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].[contenthash].css"),
    ]
};