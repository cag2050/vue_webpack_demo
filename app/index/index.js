/**
 * Created by cag on 2017/2/24.
 */
import Vue from 'vue';
import FavList from './assets/FavList.vue';

require('./assets/css.css');


var Child = {
    template: '<div>A custom component!</div>'
}

new Vue({
    el: '#div1',
    data: {
        msg: 'Learn Vue.js999!'
    },
    components: {
        'child':Child,
        'favlist':FavList
    }
});
