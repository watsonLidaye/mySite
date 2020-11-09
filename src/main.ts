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
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import { Icon,Button,notification  } from 'ant-design-vue';

import 'ant-design-vue/dist/antd.less'
import Axios from 'axios'

import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.prototype.$utill = $utill
Vue.prototype.$store = store
Vue.prototype.$notification=notification
Vue.use(preview)
Vue.use(Icon);
Vue.use(Button);
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
