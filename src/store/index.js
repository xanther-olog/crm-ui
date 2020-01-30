import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryDetails: [],
    leadDetails: [],
    marketingAgentDetails: []


  },
  mutations: {
    SET_CATEGORY(state, value) {
      state.categoryDetails = value;
    },
    SET_LEAD(state, value) {
      state.leadDetails = value;
    },
    SET_MARKETING_AGENT(state, value) {
      state.marketingAgentDetails = value;
    },
  },
  actions: {

    getCategoryDetails({ commit }) {
      axios.get(' http://172.16.20.14:8085/api/category').then(
        res => {
          commit('SET_CATEGORY', res.data.ll)
        }
      )
    },
    sendId({commit}={}) {
      axios.get('http://172.16.20.14:8085/api/subcategory/'+localStorage.getItem('id')).then(
        res => {
          commit('SET_LEAD', res.data.ll)
        },
        localStorage.removeItem("id")
      )
    }
  },

  modules: {

  },
  getters: {
    categories(state) {
      return state.categoryDetails;
    },
    leads(state){
      return state.leadDetails;
    }
  }
})
