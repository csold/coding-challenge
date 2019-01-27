import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: null,
    page1Data: {
      storeType: null,
      storeDetails: null,
      user: null,
      firstName: null,
      lastName: null
    }
  },
  mutations: {
    addUsers(state, data) {
      state.users = data
    },
    storePage1Data(state, data) {
      state.user = data.firstName+' '+data.lastName
      state.page1Data = data
    }
  },
  actions: {

  }
})
