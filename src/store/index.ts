import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    orderDetailReode:''
  },
  mutations: {
    loading(state, status) {
      state.loading = status
    },
    orderDetailReode(state, status) {
      state.orderDetailReode = status
    },
  },
  actions: {
    loading({
      commit
    }, status) {
      commit('loading', status)
    },
    orderDetailReode({
      commit
    }, status) {
      commit('orderDetailReode', status)
    },
  },
  modules: {
  }
})
