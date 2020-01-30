<template>
  <div class="custom-select">
      <select class="leads" name="LEADS">
      <option v-for="category in categoriesList" v-bind:key="category" @value ="category.categoryName">{{categoryName}}</option>
    </select>

  </div>
</template>

<script>
export default {
  name: "Leads",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
};
</script>


