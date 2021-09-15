/*
 * @Author: your name
 * @Date: 2021-08-10 14:11:04
 * @LastEditTime: 2021-08-14 18:34:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-juejin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show: false,
  },
  mutations: {
    LOGIN(state) {
      state.show = !state.show;
    }
  },
  actions: {
  },
  modules: {
  }
})
