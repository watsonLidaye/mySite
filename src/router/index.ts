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
  {
    path: '/pc',
    name: 'pc',
    redirect:'/pc/index',
    component: (resolve: any) => require(['../views/pc/pc.vue'], resolve),
    children:[
      {
        path: '/pc/index',
        name: 'pc',
        component: (resolve: any) => require(['../views/pc/index/index.vue'], resolve),
      }
    ]
  },
  {
    path: '/moblie',
    name: 'moblie',
    component: (resolve: any) => require(['../views/moblie/moblie.vue'], resolve),
  },
]

const router = new VueRouter({
  mode: 'hash',
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
