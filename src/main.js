// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from "vue-router"
import VueResource from 'vue-resource';
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'
import './assets/css/common.css'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.use(ElementUI)

// import axios from 'axios'
// axios.defaults.withCredentials = true


const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: (createElement) => createElement(App)
});


