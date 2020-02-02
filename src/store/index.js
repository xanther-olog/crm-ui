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
    leadKaDetail: {}
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
    }
  },
  actions: {

    getCategoryDetails({ commit }) {
      axios.get('http://172.16.20.161:8090/marketingAgent/getCategoryList').then(
        res => {
          commit('SET_CATEGORY', res.data)
        }
      )
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
      // axios.post("http://172.16.20.14:8085/api/submit/" + localStorage.getItem("id") + "/" + localStorage.getItem("lid")
      //   + "/" + localStorage.getItem("mid"))
      axios.post("http://172.16.20.161:8090/marketingAgent/assignMarketAgent", {
        'marketingAgentId': localStorage.getItem("mid"),
        'leadId': localStorage.getItem("lid")
      })
      alert("Done!")
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
      // eslint-disable-next-line no-console
      //console.log(x+" "+y)
      // 
      axios.post("http://172.16.20.161:8090/supportAgent/assignTicket", {
        'supportAgentId': y,
        'ticketId': x
      })
      alert('Ticket assigned to designated support agent!')
    },
    getLeadForMarketAgent({ commit } = {}) {
      //window.console.log(localStorage.getItem("accessTokenMA"))
      axios.get('http://172.16.20.161:8090/marketingAgent/getLeadListByMarketAgentId/' + localStorage.getItem('accessTokenMA')
      ).then(
        res => {
          commit('SET_LEAD_LIST', res.data)
        }).catch(err => window.log.console(err))
    },
    getLeadDetails({ commit } = {}) {
      axios.get('http://172.16.20.14:8085/api/allleads/' + localStorage.getItem("leadid")).then(
        res => {
          commit('GET_LEAD_DETAILS', res.data)
        }
      )
      localStorage.removeItem("leadid");
    },
    // eslint-disable-next-line no-unused-vars
    registerSA() {
      axios.post('http://172.16.20.161:8090/supportAgent/addSupportAgent', {
        'supportAgentId': localStorage.getItem('serviceAgentUserId'),
        // 'supportAgentId':'hee hee hee',
        'supportAgentName': localStorage.getItem('name'),
        'supportAgentEmail': localStorage.getItem('email'),
        'ticketsResolved': 0,
        'ticketsPending': 0
      })
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
    registerMA({commit}, {params, success}) {
      axios.post('http://172.16.20.161:8090/marketingAgent/addMarketAgent', params.data)
      .then(res => {
        window.console.log(res)
        success && success(res)
      })
      commit
    }
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
    }
  }
})
