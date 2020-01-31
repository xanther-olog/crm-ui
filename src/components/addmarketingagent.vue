<template>
  <div>
    <h1>ADD MARKETING AGENT</h1>
    <div class="login">
        <div class="register">
      <h1>Register here</h1>
      <br />
      <br />
      <form name="maForm" action="<IP>">
        <input type="text" placeholder="username" name="username" v-model="username"/>
        <br />
        <br />
        <input type="email" placeholder="enter email" name="email" v-model="email"/>
        <br />
        <br />
        <input type="password" placeholder="password" name="pwd" v-model="pwd"/>
        <br><div class="checkboxes">
        <input type="checkbox" name="Literature" value="Literature" v-model="checkedNames" />Literature
        <input type="checkbox" name="Technology" value="Technology" v-model="checkedNames" />Technology
        <input type="checkbox" name="Lifestyle" value="Lifestyle" v-model="checkedNames" />Lifestyle
        <input type="checkbox" name="Movies" value="Movies" v-model="checkedNames" />Movies
        <input type="checkbox" name="Food" value="Food" v-model="checkedNames" />Food
        <input type="checkbox" name="Sports" value="Sports" v-model="checkedNames" />Sports
        </div>
      </form>
      <button @click="getAllSelectedValue">REGISTER</button>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "addmarketingagent1",
  data() {
    return {
        checkedNames: []
    }
  },
  methods: {
      getAllSelectedValue(){
          //window.console.log('checkedNames', this.checkedNames);
        //   let formData={
        //       name:this.username,
        //       emailAddress:this.email,
        //       password:this.pwd
        //   }
          //this.$store.dispatch('registerMarketAgent',{formData})
            axios.post("http://172.16.20.121:8080/controller/register/",{
                'name':this.username,
                'emailAddress':this.email,
                'password':this.pwd
            }).then(function(response){
                localStorage.setItem('marketAgentUserId',response.data.data.userId)
            })
            axios.post("http://172.16.20.161:8090/marketingAgent/addMarketAgent",{
                'marketingAgentId':localStorage.getItem('marketingAgentUserId'),
                'marketingAgentName':this.username,
                'marketingAgentEmail':this.email,
                'leadsResolved':0,
                'leadsPending':0,
                'category':this.checkedNames
            })
      }
  }
};
</script>
<style>
.login {
  text-align: center;
  border: 2px solid black;
  margin-left: 500px;
  margin-right: 500px;
  padding-bottom: 30px;
  background-color: bisque;
  box-shadow: 5px 5px 5px 5px;
  border-radius: 10px;
  margin-top: 40px;
  
}
input {
  width: 220px;
  padding: 0;
  height: 30px;
  position: relative;
  left: 0;
  outline: none;
  border: 1px solid #cdcdcd;
  border-color: rgba(0, 0, 0, 0.15);
  background-color: white;
  border-radius: 10px;
  font-size: 16px;
}
h1 {
  text-decoration: underline;
}
button {
  background: #0066a2;
  color: white;
  border-style: outset;
  border-color: #0066a2;
  height: 50px;
  width: 100px;
  font: bold 15px arial, sans-serif;
  text-shadow: none;
}
.chechboxes{
    display: flex;
    flex-direction: row;
}

</style>
