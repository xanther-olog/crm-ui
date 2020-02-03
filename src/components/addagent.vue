<template>

<div>
    <h1>ADD SERVICE AGENT</h1>
    <div class="login">
      <h1>Register here</h1>
      <br />
      <br />
      <form name="maForm">
        <input type="text" placeholder="username" name="username" v-model="username" required />
        <br />
        <br />
        <input type="email" placeholder="enter email" name="email" v-model="email" required />
        <br />
        <br />
        <input type="password" placeholder="password" name="pwd" v-model="pwd" required />
        <br />
      </form>
      <br />
      <button @click="registerServiceAgent()">REGISTER</button>
    </div>
  </div>




</template>
<script>


import axios from "axios";
export default {
  name: "addagent1",
  data: function() {
    return {
      saId: ""
    };
  },
  methods: {
    registerSASuccess() {
      this.$store.dispatch("registerSA");
      alert("Support agent registered!")
    },
    registerServiceAgent() {
      axios
        .post("http://172.16.20.121:8080/controller/register/", {
          name: this.username,
          emailAddress: this.email,
          password: this.pwd
        })
        .then(function(response) {
          window.console.log(response),
            localStorage.setItem(
              "serviceAgentUserId",
              response.data.data.userId
            );
          localStorage.setItem("name", response.data.data.name);
          localStorage.setItem("email", response.data.data.emailAddress);
          //this.saId = response.data.data.userId
        })
        .then(this.registerSASuccess);
    }
  }
};

</script>
<style scoped>
.login4{
    text-align: center;
    border: 2px solid black;
    margin-left: 500px;
    margin-right: 500px;
    padding-bottom: 30px;
    background-color:aliceblue;
    box-shadow: 5px 5px 5px 5px;
    border-radius:10px;
    margin-top:40px;
    padding-top:100px;
    padding-bottom:100px;
}

input{
    width: 220px;
     padding: 0;
    height: 30px;
    position: relative;
    left: 0;
    outline: none;
    border: 1px solid #CDCDCD;
    border-color: rgba(0,0,0,.15);
    background-color: white;
    border-radius:10px;
    font-size: 16px;
}
h1{
    text-decoration:underline
}
button{
    background: #0066A2;
color: white;
border-style: outset;
border-color: #0066A2;
height: 50px;
width: 100px;
font: bold 15px arial, sans-serif;
text-shadow:none;
}
.register1{
    margin-top:-41px;
}

</style>