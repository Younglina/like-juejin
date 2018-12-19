import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCate:''
  },
  mutations: {
    SET_CATE(state, data){
      state.currentCate = data
    }
  },
  getters: {
    currentCate(state){
      return state.currentCate
    }
  }
})
