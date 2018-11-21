/**
 * Created by wayne on 2018/10/22.
 */

import './app.scss';
import Vue from 'vue';


import router from '@/router'
import Main from '@/main';

new Vue({
  el: '#app',
  router,
  template: '<Main/>',
  components:{
    Main
  }
  // render: h => h(Main)
})