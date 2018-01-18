// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from "vue-router"
 // import VueResource from 'vue-resource';
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'
import './assets/css/common.styl'

import './assets/js/bootstrap.min.js'
import './assets/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'

// Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.use(ElementUI)

import axios from 'axios'
axios.defaults.withCredentials = true


const router = new VueRouter({
  //mode: 'history',
  //base: '/mlzone-vue/',
  routes : routes,
})

new Vue({
  el: '#app',
  router,
  render: (createElement) => createElement(App)
});


