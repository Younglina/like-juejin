import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCate:'',
    userInfo:{}
  },
  mutations: {
    SET_CATE(state, data){
      state.currentCate = data
    },
    SET_USER(state, data){
      state.userInfo = data
    }
  },
  getters: {
    currentCate(state){
      return state.currentCate
    },
    userInfo(state){
      return state.userInfo
    }
  }
})
