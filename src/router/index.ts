import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: (resolve: any) => require(['../views/login/login.vue'], resolve),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.onError((error) => {
  console.log(error)
})

router.beforeEach((to, from, next) => {
  next()

})

router.afterEach((to, from) => {

})
export default router
