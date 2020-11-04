//  接口服务
// var store = require('@/vuex/store').default.state
// var config = require('../config').default
import axios from 'axios'
import daily from './api/daily'
import admin from './api/admin'
import order from './api/order'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const api = Object.assign(daily, admin, order, {})
//  域名
const urls = (function () {
  let urls = ''
  if (location.href.indexOf('test') != -1 || location.href.indexOf('localhost') != -1 || location.href.indexOf('127.0.0.1') != -1) {
    urls = 'http://127.0.0.1:3000/'
  } else {
    urls = 'http://www.ergouzi.com.cn:3000/'
  }
  if (process.env.NODE_ENV === "'dev'"){
    urls = 'api'
} else {
  urls = ''
}
  return urls
})()

interface Errorobg {
  msg: string;
}
let objError: Errorobg = {
  msg: ''
}
axios.interceptors.request.use(config => {
  if (window.Lockr.get('sessionId')) {
    config.headers.sessionId = window.Lockr.get('sessionId');
  }
  return config
}, err => {
  console.log(err)
  objError.msg = '网络较慢请求超时，请稍后重试'
  window.bus.$message.error(objError.msg)
  return Promise.resolve(objError)
})
axios.interceptors.response.use(data => {
  console.log(data)
  if (data.config.url.indexOf("exportOrder") <= 0 && data.data.code != 0) {
    window.bus.$message.error(data.data.msg)
    return;
  }
  return data
}, err => {
  if (err.toString().indexOf('Network Error') > 0) {
    objError.msg = '网络错误'
    window.bus.$message.error(objError.msg)
    return Promise.reject(objError)
  }
  return Promise.resolve(err)
})

//post请求通用函数
function POST(path, data) {
  return axios({
    method: 'post',
    url: `${urls}${path}`,
    data: data,
    headers: { "Content-Type": "application/json" }
  })
}

//get请求通用函数
function GETPromise(path, data) {
  return axios({
    method: 'GET',
    url: `${urls}${path}`,
    params: data
  })
}

const exportObj = {
  api,
  urls
}
for (let i in api) {
  exportObj[i] = function (data) {
    if (api[i].methods == 'POST') {
      return new Promise((resolve, reject) => {
        POST(api[i].url, data)
          .then(res => {
            res.data.code == 0 && resolve(res.data)
            res.data.code != 0 && reject(res.data)
            !res.data && reject(res)
          })
      })
    } else {
      return new Promise((resolve, reject) => {
        GETPromise(api[i].url, data)
          .then(res => {
            res.data.code == 0 && resolve(res.data)
            res.data.code != 0 && reject(res.data)
            !res.data && reject(res)
          })
      })
    }
  }
}
export default exportObj

