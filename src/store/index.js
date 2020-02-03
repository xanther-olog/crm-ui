/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryDetails: [],
    leadDetails: [],
    marketingAgentDetails: [],
    listOfOpenTickets: [],
    serviceAgentDetails: [],
    leadList: [],
    leadKaDetail: [],
    results: [],
    ticketlists: [],
    numberdata: []
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
    SET_OPEN_TICKETS(state, value) {
      state.listOfOpenTickets = value;
    },
    SET_SERVICE_AGENT(state, value) {
      state.serviceAgentDetails = value;
    },
    SET_LEAD_LIST(state, value) {
      state.leadList = value;
      //window.console.log(state.leadList)
    },
    GET_LEAD_DETAILS(state, value) {
      state.leadKaDetail = value;
    },
    setdetails(state, value) {
      state.results = value;
    },

    setticketdetails(state, value) {
      state.ticketlists = value;
    },
    setresandpen(state, value) {
      state.numberdata = value
    },
  },
  actions: {

    getCategoryDetails({ commit }) {
      axios.get('http://172.16.20.161:8090/marketingAgent/getCategoryList').then(
        res => {
          commit('SET_CATEGORY', res.data)
        }
      )
    },
    registerSA() {
      axios.post('http://172.16.20.161:8090/supportAgent/addSupportAgent', {
        'supportAgentId': localStorage.getItem('serviceAgentUserId'),
        // ‘supportAgentId’:‘hee hee hee’,
        'supportAgentName': localStorage.getItem('name'),
        'supportAgentEmail': localStorage.getItem('email'),
        'ticketsResolved': 0,
        'ticketsPending': 0
      },
      )
    },

    register({ commit }, { params, success }) {
      window.console.log(params.data);
      fetch('http://172.16.20.121:8080/controller/register/', {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(params.data)
      })
        .then(res => {
          return res.json()
        })
        .then(res => {
          window.console.log(res)
          localStorage.setItem('marketAgentUserId', res.data.userId)
          localStorage.setItem('maEmail', res.data.emailAddress)
          localStorage.setItem('maname', res.data.name)
          success && success(res)
        })
      commit
    },


    details({ commit } = {}) {
      axios.get("http://172.16.20.161:8090/supportAgent/getTicketById/" + localStorage.getItem("xyz"))
        .then(res => {
          window.console.log(res.data);
          commit('setdetails', res.data)
        })
    },
    lists({ commit }) {
      let auth = {
        headers: {
          token: localStorage.getItem('accessTokenSA')
        }
      }
      axios.get("http://172.16.20.161:8090/supportAgent/getTicketsBySAId/",auth)
        .then(res => {
          commit('setticketdetails', res.data)
          // console.log(res.data)
          localStorage.setItem("xyz",res.data.ticketId)
        })
        
    },
    resolved({ commit }) {
      const auth = {
        headers:{
            token: localStorage.getItem('accessTokenSA')
        }
    }
      axios.get("http://172.16.20.161:8090/supportAgent/getCountOfTickets/",auth)
        .then(res => {
          commit('setresandpen', res.data)
        })
    },



    registerMA({ commit }, { params, success }) {
      axios.post('http://172.16.20.161:8090/marketingAgent/addMarketAgent', params.data)
        .then(res => {
          window.console.log(res)
          success && success(res)
        })
      commit
    },


    sendId({ commit } = {}) {
      axios.get('http://172.16.20.161:8090/marketingAgent/getLeadsByCategory/' + localStorage.getItem('id')).then(
        res => {
          commit('SET_LEAD', res.data)
        },
        //localStorage.removeItem("id")
      )
    },
    sendLid({ commit } = {}) {
      axios.get("http://172.16.20.161:8090/marketingAgent/getMarketAgentByCategory/" + localStorage.getItem('id')).then(
        res => {
          commit('SET_MARKETING_AGENT', res.data)
        },
        //localStorage.removeItem('lid')
      )
    },
    send() {

      axios.post("http://172.16.20.161:8090/marketingAgent/assignMarketAgent", {
        'marketingAgentId': localStorage.getItem("mid"),
        'leadId': localStorage.getItem("lid")
      })
      alert("DONE!")
    },
    getOpenTickets({ commit } = {}) {
      axios.get("http://172.16.20.161:8090/supportAgent/getTicketList").then(
        res => {
          commit("SET_OPEN_TICKETS", res.data)
        }
      )
    },
    getSupportAgents({ commit } = {}) {
      axios.get("http://172.16.20.161:8090/supportAgent/getSAList").then(
        res => {
          commit("SET_SERVICE_AGENT", res.data)
        }
      )
    },
    assignSupportAgents() {
      let x = localStorage.getItem("ticketId");
      let y = localStorage.getItem("supportAgentId")
      axios.post("http://172.16.20.161:8090/supportAgent/assignTicket", {
        "supportAgentId": y,
        "ticketId": x
      })
    },




    getLeadForMarketAgent({commit}={}) {
      //window.console.log(localStorage.getItem(“accessTokenMA”))
      //let test="lehsun"
      const auth = {
        headers: {
          token: localStorage.getItem('accessTokenMA')
        }
      }
      window.console.log(localStorage.getItem('accessTokenMA'))
      axios.get('http://172.16.20.161:8090/marketingAgent/getLeadListByMarketAgentId',auth).then(res=>{
        commit('SET_LEAD_LIST',res.data)
    })
    },

    getLeadDetails({ commit } = {}) {
      axios.get('http://172.16.20.161:8090/marketingAgent/getLeadByLeadId/' +localStorage.getItem("leadid"))
      .then(res=>{
          commit('GET_LEAD_DETAILS',res.data)
      })
    },
    // loginWithSupportAgent({commit}={}){
    //     const auth = {
    //         headers:{
    //             token: localStorage.getItem('accessTokenSA')
    //         }
    //     }
    //     axios.get('http://172.16.20.161:8090/supportAgent/',auth).then(res=>{
    //         // eslint-disable-next-line no-console
    //         console.log(res.data)
    //         commit
    //     })
    // }
  },

  modules: {

  },
  getters: {
    categories(state) {
      return state.categoryDetails;
    },
    leads(state) {
      return state.leadDetails;
    },
    marketagents(state) {
      return state.marketingAgentDetails;
    },
    openTickets(state) {
      return state.listOfOpenTickets;
    },
    serviceAgents(state) {
      return state.serviceAgentDetails;
    },
    leadList1(state) {
      return state.leadList;
    },
    leadkasaaman(state) {
      return state.leadKaDetail;
    },

    results(state) {
      return state.results;
    },
    ticketlists(state) {
      return state.ticketlists;
    },
    numberdata(state) {
      return state.numberdata;
    }

  }
})
