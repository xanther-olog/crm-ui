<template>
  <div id="main">
    <div class="admin">
    <h1>ADMIN DASHBOARD</h1>
    </div>
    <div id="nav">
      <ul>
        <li id="assignma">
          <a href="#" id="1" v-on:click="select($event)">Assign marketing agents</a>
        </li> 
        <li>
          <a href="#" id="2" v-on:click="select($event)">Assign tickets</a>
        </li> 
        <li>
          <a href="#" id="3" v-on:click="select($event)">Add service agent</a>
        </li>
        <li> 
          <a href="#" id="4" v-on:click="select($event)">Add marketing agent</a>
        </li>
        <li> 
          <a href="#">Logout</a>
        </li> 

        <div>


        </div>
       </ul> 
    </div>
    <!-- <categories1 />
    <Tickets /> -->
    <component v-bind:is="component" />
  </div>
</template>


 <script>
import categories1 from "@/components/categories.vue";
import Tickets from "@/components/Tickets.vue";
import addagent1 from "@/components/addagent.vue";
import addmarketingagent1 from "@/components/addmarketingagent.vue";
//import func from '../../vue-temp/vue-editor-bridge';
// import {mapGetters} from 'vuex'
export default {
  name: "categories",
  components: {
    categories1,
    Tickets,addagent1,addmarketingagent1
  },
  data() {
    return {
      component: categories1
    };
  },
  methods: {
    select: function(event) {
      // window.console.log(event.target.id)
      if (event.target.id === "1") {
        this.component = categories1;
      } else if (event.target.id === "2") {
        this.component = Tickets;
      }else if(event.target.id ==="3"){
        this.component=addagent1;
      }
      else if(event.target.id ==="4"){
        this.component=addmarketingagent1;
      }
    }
  },
  created() {
    this.$store.dispatch("getCategoryDetails", {
      success: this.CategoryDetailsRecieved
    });
  }
};
</script>




<style scoped>

#nav {
  /* background-color: rgb(248, 58, 58); */
  /* background-color: skyblue;
  display: block; */

height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  margin-top: 60px;

}
.admin{
  background-color:aliceblue;
margin-top:-16px;
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
#nav a{
padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
</style>

