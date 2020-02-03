<template>
  <div>
    <navbar></navbar>
    <div class="pend">
      <h3>Number of Resolved Tickets: {{ticketCounts.ticketsResolved}}</h3>
      <h3>Number of Pending Tickets: {{ticketCounts.tickertsPending}}</h3>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    navbar
  },
  created() {
    // this.$store.dispatch('resolved');
    window.console.log(
      "dscsdvsdvdsvs     " + localStorage.getItem("accessTokenSA")
    );
    if (localStorage.getItem("accessTokenSA") != null) {
      window.location.replace("http://localhost:8080/loginserviceagent");
      this.$store.dispatch("resolved");
    } else {
      window.location.replace("http://localhost:8080/loginserviceagent");
    }
  },
  computed: {
    ...mapGetters(["numberdata"]),
    ticketCounts() {
      return this.numberdata;
    }
  },
  methods: {
    ticketslist: function() {
      this.$router.push("/ticketslist");
    }
  }
};
</script>

<style scoped>
.pend {
  padding-left: 300px;
  margin-top: 200px;
  display: flex;
  justify-content: space-around;
  color: #818181;
}
h1 {
  margin-top: 1%;
  color: black;
}
.headi {
  margin-top: 5%;
}
h3:hover {
  background-color: rgb(39, 41, 41);
  color: aliceblue;
}
</style>