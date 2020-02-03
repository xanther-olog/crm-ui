<template>
  <div class="mainDIv">
    <div class="table">
      <table class="closed_leads">
        <tr>
          <th><center>ID</center></th>
          <th><center>Name</center></th>
          <th><center>Email</center></th>
          <th><center>Category</center></th>
          <th><center>Source</center></th>
          <th><center>Created time</center></th>
          <th><center>Updated time</center></th>
          <th><center>Mail count</center></th>
        </tr>
        <tr v-for="c in getClosedLeadsMapGetter" v-bind:key="c.leadId" class="lead_deets">
          <td>{{ c.leadId }}</td>
          <td>{{ c.leadName }}</td>
          <td>{{ c.leadEmail }}</td>
          <td>{{ c.category }}</td>
          <td>{{ c.source }}</td>
          <td>{{ c.createdTime }}</td>
          <td>{{ c.updateTime }}</td>
          <td>{{ c.mailCount }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from "vuex";
export default {
  name: "leads_closed",
  created() {
    this.$store.dispatch("getClosedLeads");
  },
  computed: {
    ...mapGetters(["getClosedLeadsMapGetter"])
  }
};
</script>
<style scoped>
.closed_leads {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.closed_leads td,
.closed_leads th {
  border: 1px solid #ddd;
  padding: 8px;
}
.closed_leads tr:nth-child(even) {
  background-color: #f2f2f2;
}
.closed_leads tr:hover {background-color: #ddd;}
.closed_leads th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #444;
  color: white;
}
</style>