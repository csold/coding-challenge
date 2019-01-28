import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    page1Data: {
      storeType: null,
      storeDetails: null,
      user: null,
      firstName: null,
      lastName: null
    },
    page2Data: {
      userRole: null,
      joinDate: null,
      inVictoria: null,
      location: null
    },
    page1Populated: false,
    page2Populated: false
  },
  mutations: {
    addUsers(state, data) {
      state.users = data
    },
    storePage1Data(state, data) {
      state.page1Data = data
    },
    storePage2Data(state, data) {
      state.page2Data = data
    },
    checkPage1(state, data) {
      state.page1Populated = data
    },
    checkPage2(state, data) {
      state.page2Populated = data
      console.log(data)
    }
  },
  actions: {

  }
})
