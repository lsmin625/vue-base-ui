import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: null,
    auth : { 
      token: null,
      level: null
    }
  },
  getters: {},
  mutations: {
    LOGIN(state, { id, auth }) {
      state.id = id
      state.auth.token = auth.token
      state.auth.level = auth.level
    },
    LOGOUT(state) {
      state.id = null
      state.auth.token = null
      state.auth.level = null
    },
  },
  actions: {
    LOGIN({ commit }, { id, auth }) {
      commit("LOGIN", {id, auth})
    },
    LOGOUT({ commit }) {
      commit("LOGOUT")
    },
  },
})