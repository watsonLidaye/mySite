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
import { Icon,Button,notification,Input,message,Spin  } from 'ant-design-vue';
import  './assets/js/public'
import 'ant-design-vue/dist/antd.less'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'
import waterfall from 'vue-waterfall2'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(waterfall)
Vue.prototype.$utill = $utill
Vue.prototype.$store = store
Vue.prototype.$notification=notification
Vue.prototype.$message = message
Vue.use(preview)
Vue.use(Icon);
Vue.use(Button);
Vue.use(Input);
Vue.use(Spin);
const bus = new Vue()
window.bus = bus
window.Lockr = Lockr
window.$store = store
window.$utill = $utill
window.$Ajax = Axios
Vue.use(VueLazyload, {
  loading: require('./assets/image/u=122436735,1720737121&fm=26&gp=0.jpg'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/image/u=122436735,1720737121&fm=26&gp=0.jpg')  //加载失败图片
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  filters:fillter,
  render: h => h(App),
}).$mount('#app')
