import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NProgress from 'nprogress'
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
        name: 'pcindex',
        component: (resolve: any) => require(['../views/pc/index/index.vue'], resolve),
      },
      {
        path: '/pc/shortContent',
        name: 'pcshortContent',
        component: (resolve: any) => require(['../views/pc/shortContent/index.vue'], resolve),
      },
      {
        path: '/pc/content',
        name: 'pcContent',
        component: (resolve: any) => require(['../views/pc/pcContent/index.vue'], resolve),
      },
      {
        path: '/pc/images',
        name: 'pcImages',
        component: (resolve: any) => require(['../views/pc/pcImages/index.vue'], resolve),
      },
      {
        path: '/pc/lab',
        name: 'pclab',
        component: (resolve: any) => require(['../views/pc/lab/index.vue'], resolve),
      },
    ]
  },
  {
    path: '/moblie',
    name: 'moblie',
    redirect:'/moblie/index',
    component: (resolve: any) => require(['../views/moblie/moblie.vue'], resolve),
    children:[
      {
        path: '/moblie/index',
        name: 'moblieindex',
        component: (resolve: any) => require(['../views/moblie/index/index.vue'], resolve),
      },
      {
        path: '/moblie/shortContent',
        name: 'moblieshortContent',
        component: (resolve: any) => require(['../views/moblie/shortContent/index.vue'], resolve),
      },
      {
        path: '/moblie/content',
        name: 'moblieContent',
        component: (resolve: any) => require(['../views/moblie/Content/index.vue'], resolve),
      },
      {
        path: '/moblie/images',
        name: 'moblieImages',
        component: (resolve: any) => require(['../views/moblie/Images/index.vue'], resolve),
      },
      {
        path: '/moblie/lab',
        name: 'moblielab',
        component: (resolve: any) => require(['../views/moblie/lab/index.vue'], resolve),
      },
    ]
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
  NProgress.start()
  next()

})

router.afterEach((to, from) => {
  NProgress.done()
})
export default router
