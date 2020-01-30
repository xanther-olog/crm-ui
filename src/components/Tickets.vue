<template>
  <div class="maindiv">
    <div class="ticketslist">
      <select>
        <option
          v-for="t in openTickets"
          v-bind:key="t.ticketid"
          v-bind:value="t.ticketid"
        >{{t.ticketsource}}</option>
      </select>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["openTickets"])
  },
  created(){
      this.$store.dispatch("getOpenTickets", {
      //success: this.CategoryDetailsRecieved
    });
  }
};
</script>

<style scoped>
</style>