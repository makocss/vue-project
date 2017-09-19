// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './http.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery/dist/jquery.min.js'
import 'jquery.cookie/jquery.cookie.js'

Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
const app = new Vue({
	axios,
	router,
	...App
})

export { app, router}