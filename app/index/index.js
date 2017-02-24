/**
 * Created by cag on 2017/2/24.
 */
import Vue from 'vue';
import FavList from './components/FavList.vue';

var exampleData = {
    name: 'Vue.js!'
};

new Vue({
    el: '#div1',
    data: exampleData,
    components: {FavList}
});
