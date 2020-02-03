<template>
  <div class="mainDIv">
    <div class="table">
      <table class="closed_leads">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Category</th>
          <th>Source</th>
          <th>Created time</th>
          <th>Updated time</th>
          <th>Mail count</th>
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
.closed_leads th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #444;
  color: white;
}
</style>