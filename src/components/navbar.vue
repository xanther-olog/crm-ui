<template>
  <div class="nav_bar">
    <nav>
      <h1>Support Agent DASHBOARD</h1>
      <div class="main">
        
        <ul>
          <li>
            
          </li>
        </ul>
      </div>
    </nav>
    <div class="sidenav">

<a @click="home()">Home</a>
      <a @click="ticketslist">My Tickets</a>
      <a>Logout</a>
    </div>
    <!-- <div class="pend">
      <div  v-for="anu in numberdata" v-bind:key="anu.pendingtickets">
        <h3>No.Of Pending Tickets:{{anu.pendingtickets}} </h3>
        <h3>No.Of Tickets Resolved: {{anu.resolvedtickets}}</h3>
      </div>
      </div> -->
    </div>
</template>

<script>
// import{ mapGetters } from 'vuex'
export default {

//       created (){
//           this.$store.dispatch('resolved')
//           window.console.log('hellooo....')
//       },
//       computed :  {
//           ...mapGetters(['numberdata'])
//       },
  methods: {
    ticketslist: function() {
      this.$router.push("/ticketslist");
    },
    home: function() {
      this.$router.push("/Support");
    }
  }
}
</script>

<style scoped>
body {
  top: 0%;
}
.sidenav {
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
.nav_bar {
  height: 0px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
ul li {
  float: left;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px;
  font-size: 28px;
  padding: 0px 10px;
  margin-top: 0px;
}

@media screen and (max-height: 450px) {
  .sidenav,
  nav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
nav {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: aliceblue;
  width: 100%;
  height: 60px;
}
ul {
  display: inline;
  margin-left: 0%;
}
li {
  display: inline;
  padding: 20px;
}
.main {
  height: 60px;
}
/* .pend {
  padding-left: 300px;
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  color: #818181;
} */
h1{
  text-align: center
}

</style>