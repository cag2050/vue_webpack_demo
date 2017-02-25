/**
 * Created by cag on 2017/2/25.
 */
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');

var app = express();

var compiler = webpack(config);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

// webpack���������html�ļ��ı��¼�
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // �����¼�
        hotMiddleware.publish({action: 'reload'});
        cb();
    })
});

app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(8888, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:8888');
});