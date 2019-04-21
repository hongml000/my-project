import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
// 使用插件Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})
