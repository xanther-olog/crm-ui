<template>
  <div class="custom-select">
    <select class="leads" name="LEADS">
      <option
        v-for="lead in leadList"
        v-bind:key="lead.subCategoryId"
        @value="lead.subCategoryId"
      >{{lead.subCategoryDetails}}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: "Leads",
};
</script>


