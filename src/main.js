// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import "./css/public.css"
import $ from 'jquery'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'



import "./css/swiper.min.css"

//开启debug模式
// Vue.config.debug = true;


Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper)
 Vue.use(Vuex)


new Vue({
  el: '#app',
  router,
  // axios,
  components: { App },
  template: '<App/>'
})
