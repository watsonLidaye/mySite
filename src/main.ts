import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fillter from './assets/js/utils/fillter.js'
import Lockr from 'lockr'
import './assets/css/cssrest.css'
import './assets/css/public.css'
import './assets/css/theme.scss'
import $utill from './assets/js/util'


import 'ant-design-vue/dist/antd.less'
import Axios from 'axios'


Vue.prototype.$utill = $utill
Vue.prototype.$store = store
const bus = new Vue()
window.bus = bus
window.Lockr = Lockr
window.$store = store
window.$utill = $utill
window.$Ajax = Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filters:fillter,
  render: h => h(App),
}).$mount('#app')
