<template>
  <div id="main">

    <div id="nav">
        <ul>
          <li>
            <a href="#">Assign marketing agents</a>
          </li>
          <li>
            <a href="#">Assign tickets</a>
          </li>
          <li>
            <a href="#">Add service agent</a>
          </li>
          <li>
            <a href="#">Add marketing agent</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
          
    <div>
       <!-- <categories v-for = "category in categoriesList"  key = "category.categoryId" : item="category"></categories>  -->
      <!-- <categories props></categories> -->
    </div>
    </ul>
    </div>
    <!-- {{ categories }} -->
              <!-- <categories1 v-for="category in categoriesList"  :key="category.categoryId" :item="category"></categories1> -->
<categories1/>
  </div>
</template>


 <script>
 import categories1 from "@/components/categories.vue";
// import {mapGetters} from 'vuex'
export default {
  name: "categories",
  components: {
     categories1
  },
  methods: {
    CategoryDetailsRecieved: function() {
        window.console.log(this.$store.getters["getAllCategoryDetails"]);
        this.categoriesList=this.$store.getters["getAllCategoryDetails"];
        // return this.$store.state.categoryDetails
    }
  },
  // computed: {
  //   ...mapGetters(['categories'])
  // },
  created() {
        this.$store.dispatch("getCategoryDetails",{
          success:this.CategoryDetailsRecieved,
            }
);

  },
  data: function() {
    return {
      categoriesList: [
        {
          categoryId: 1,
          categoryName: "fhjbdfhv"
        }
      ]
    };
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
  position:relative;
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

