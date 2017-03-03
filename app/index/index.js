/**
 * Created by cag on 2017/2/24.
 */
import Vue from 'vue';
import FavList from './components/FavList.vue';

require('./components/css.css');


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
