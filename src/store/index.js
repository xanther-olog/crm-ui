import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryDetails: [],
    leadDetails: [],
    marketingAgentDetails: [],
    listOfOpenTickets:[]


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
    SET_OPEN_TICKETS(state,value){
      state.listOfOpenTickets=value;
    }
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
        //localStorage.removeItem("id")
      )
    },
    sendLid({commit}={}){
      axios.get("http://172.16.20.14:8085/api/market/"+localStorage.getItem('lid')).then(
        res=>{
          commit('SET_MARKETING_AGENT',res.data.ll)
        },
        //localStorage.removeItem('lid')
      )
    },
    send(){
      axios.post("http://172.16.20.14:8085/api/submit/"+localStorage.getItem("id")+"/"+localStorage.getItem("lid")
      +"/"+localStorage.getItem("mid"))
    },
    getOpenTickets({commit}={}){
      axios.get("http://172.16.20.14:8085/api/getopentickets").then(
        res=>{   
            commit("SET_OPEN_TICKETS",res.data.ll)
        }
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
    },
    marketagents(state){
      return state.marketingAgentDetails;
    },
    openTickets(state){
      return state.listOfOpenTickets;
    }
  }
})
