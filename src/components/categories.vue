<template>
  <div class="mainDiv">
    <div class="categoryDiv">
      <select @change="onchange($event)">
        <option
          v-for="cat in categories"
          v-bind:key="cat.categoryId"
          v-bind:value="cat.categoryId"
        >{{cat.categoryName}}</option>
      </select>
      <div class="leadsDiv">
        <select @change="getMA($event)">
          <option
            v-for="l in leads"
            v-bind:key="l.subCategoryId"
            v-bind:value="l.subCategoryId"
          >{{ l.subCategoryDetails}}</option>
        </select>
      </div>
      <div class="marketingAgentDiv">
        <select @change="setMaId($event)">
            <option
            v-for="m in marketagents"
            v-bind:key="m.marketingAgentid"
            v-bind:value="m.marketingAgentid"
          >{{ m.marketingAgentName}}</option>
        </select>
      </div>
    </div>
    <button @click="passToDb()" value="Submit">SUBMIT</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "categories1",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onchange(event) {
      const data = event.target.value;
      localStorage.setItem("id", data);
      this.$store.dispatch("sendId");
    },
    getMA(event) {
      const data1 = event.target.value;
      localStorage.setItem("lid", data1);
      this.$store.dispatch("sendLid");
    },
    setMaId(event){
      const data2=event.target.value;
      localStorage.setItem("mid",data2);
    },
    passToDb(){
        this.$store.dispatch("send");
    }
  },
  computed: {
    ...mapGetters(["categories"]),
    ...mapGetters(["leads"]),
    ...mapGetters(["marketagents"])
  }
};
</script>

<style scoped>
.categories {
  float: left;
  width: 101px;
  margin: 10px;
}
</style>
