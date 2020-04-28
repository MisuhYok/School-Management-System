import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    errorLogin: ''
  },
  mutations: {
    SET_ISLOADING (state, payload) {
      state.isLoading = payload
    },
    SET_ERROR_LOGIN (state, payload) {
      state.errorLogin = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
