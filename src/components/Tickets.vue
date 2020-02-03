<template>
  <div class="maindiv">
    <div class="ticketslist">
      <h1>TICKET LIST</h1>
      <div class="new">
        <select @change="onSelected($event)" class="select-css">
          <option value selected disabled>Choose here</option>
          <option
            v-for="t in openTickets"
            v-bind:key="t.ticketId"
            v-bind:value="t.ticketId"
          >{{t.postDesc}}</option>
        </select>
      </div>
    </div>
    <div class="supportAgents">
      <table class="d" border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
        <tr v-for="s in serviceAgents" v-bind:key="s.supportAgentId" class="supportagent">
          <td>{{ s.supportAgentId}}</td>
          <td>{{ s.supportAgentName }}</td>
          <td>
            <button class="accept" @click="assignSupportAgent(s.supportAgentId)">✓</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import SupportAgents from "@/components/SupportAgents.vue";
export default {
  props: ["SupportAgents"],
  computed: {
    ...mapGetters(["openTickets"]),
    ...mapGetters(["serviceAgents"])
  },
  created() {
    this.$store.dispatch("getOpenTickets", {
      //success: this.CategoryDetailsRecieved
    });
    this.$store.dispatch("getSupportAgents", {
      //success: this.CategoryDetailsRecieved
    });
  },
  components: {
    //   SupportAgents
  },
  methods: {
    assignSupportAgent(sa_id) {
      //window.console.log(knobb.ticketid)
      //window.console.log(localStorage.getItem("ticketId")+" "+sa_id);
      localStorage.setItem("supportAgentId", sa_id);
      this.$store.dispatch("assignSupportAgents");
      alert("Assignment successful!")
    },
    onSelected(event) {
      localStorage.setItem("ticketId", event.target.value);
    }
  }
};
</script>

<style scoped>
.accept {
  background: #025830;
  color: #fff;
  border: none;
  padding: 5px, 9px;
  border-radius: 50%;
  cursor: pointer;
}
.select-css {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
.select-css::-ms-expand {
  display: none;
}
.select-css:hover {
  border-color: #888;
}
.select-css:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
.select-css option {
  font-weight: normal;
}
.new {
  margin-left: 550px;
}
.supportAgents {
  margin-left: 200px;
}

table.d {
  table-layout: fixed;
  width: 100%;
}
</style>