<template>
  <div class="maindiv">
    <div id="nav">
      <ul>
        <li id="assignma">
          <a href="#" id="1" v-on:click="select($event)">My Leads</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
    <div class="leadsDiv">
      <select>
        <option value selected disabled>Choose here</option>
        <option
          v-for="l in leadList1"
          v-bind:key="l.subCategoryId"
          v-bind:value="l.subCategoryId"
        >{{l.subCategoryDetails}}</option>
      </select>
    </div>
    <div class="leadDetails">
      <h3>Ticket ID: leadList1</h3>
      <h3>Ticket source:</h3>
      <h3>Post ID:</h3>
      <h3>Post Image/Video:</h3>
      <h3>Post Description:</h3>
      <h3>Count of Dislikes:</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["leadList1"])
  },
  created() {
    this.$store.dispatch("getLeadForMarketAgent", {});
  }
};
</script>

<style scoped>
#nav {
  background-color: rgb(248, 58, 58);
}
div a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 15px;
  display: inline-block;
}
ul {
  display: block;
  margin: 0;
  padding: 0;
}
ul li {
  display: inline-block;
}
ul li:hover {
  background: #555;
}
ul li:hover ul {
  display: block;
}
ul li ul {
  position: relative;
  width: 200px;
  display: none;
}
ul li ul li {
  background: #555;
  display: block;
}
ul li ul li a {
  display: block;
}
ul li ul li:hover {
  background: #666;
}
</style>