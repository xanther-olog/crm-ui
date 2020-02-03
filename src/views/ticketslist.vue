<template>
  <div>
    <navbar></navbar>
    <div class="ticket" v-for="ticket in ticketList" v-bind:key="ticket.ticketId">
      <h3>Ticket ID:</h3>
      {{ticket.ticketId}}
      <h3>Ticket source:</h3>
      {{ticket.postDesc}}
      <br />
      <br />
      <!-- <button@click >open</button> -->
      <a @click="ticketslist(ticket.ticketId)">View</a>
      <hr />
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import { mapGetters } from "vuex";
export default {
  name: "ticketlists",
  components: {
    navbar
  },
  created() {
    this.$store.dispatch("lists");
  },
  computed: {
    ...mapGetters(["ticketlists"]),
    ticketList() {
      return this.ticketlists;
    }
  },
  methods: {
    ticketslist: function(x) {
      // eslint-disable-next-line no-console
      localStorage.setItem("xyz", x);
    //   this.$store.dispatch("getTicketDetails");
      this.$router.push("/ticketdetails");
    }
  }
};
</script>

<style scoped>
.ticket {
  padding-left: 200px;
  padding-top: 80px;
  text-align: left;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 10px 10px 10px 10px;
  padding: 50px;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 2%;
  background-color: rgb(233, 233, 247);
}
</style>