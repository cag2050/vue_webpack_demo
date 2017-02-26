/**
 * Created by cag on 2017/2/24.
 */
import Vue from 'vue';
import FavList from './components/FavList.vue';

require('./components/css.css');

var exampleData = {
    msg: 'Learn Vue.js999!'
};

new Vue({
    el: '#div1',
    data: exampleData,
    components: {FavList}
});
