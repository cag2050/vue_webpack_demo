/**
 * Created by cag on 2017/2/25.
 */
var hotClient = require('webpack-hot-middleware/client')

// �����¼����� event.action === 'reload' ʱִ��ҳ��ˢ��
hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload();
    }
});