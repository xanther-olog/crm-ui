<template>
  <div class="mainDiv">
    <div class="categoryDiv">
      <select @change="onchange($event)">
      <option v-for="cat in categories" v-bind:key="cat.categoryId" v-bind:value="cat.categoryId">{{cat.categoryName}}</option>
    </select>
    <div class="leadsDiv">
      <select>
        <option v-for="l in leads" v-bind:key="l.subCategoryId" v-bind:value="l.subCategoryId">{{ l.subCategoryDetails}} </option>
      </select>
    </div>
    </div>
    
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
      // this.$store.dispatch("sendId", {
      //   params: data
      // });
      localStorage.setItem('id',data)
      this.$store.dispatch("sendId");
    }
  },
  computed: {
    ...mapGetters(["categories"]),
    ...mapGetters(["leads"])
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
