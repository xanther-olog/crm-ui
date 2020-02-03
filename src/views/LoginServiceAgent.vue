<template>
<div>
<h1>SERVICE AGENT LOGIN</h1>
  <div class="login">
      <h1>Login here</h1>
      <br><br>
<form name="maForm">
        <input type="email" placeholder="enter email" name="email" v-model="email"/>
        <br />
        <br />
        <input type="password" placeholder="password" name="pwd" v-model="pwd"/>
        <br>
      </form>
<br>
<button @click="loginServiceAgent()"> LOGIN</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    
 methods:{
        loginServiceAgent(){
            axios.post("http://172.16.20.121:8080/controller/login/",{
                'emailAddress':this.email,
                'password':this.pwd,
                'channel':'CRM-SA',
                'fcmToken':'null'
            }).then(function(response){
            localStorage.setItem('accessTokenSA',response.data.data.accessToken)
            // this.$store.dispatch("loginWithSupportAgent")
            setTimeout(function(){window.location.href='http://localhost:8080/support'},1000)

        })
        //   this.$store.dispatch("loginWithSupportAgent")  
        }
    }


}
</script>


<style scoped>
.login{
    text-align: center;
    border: 2px solid black;
    margin-left: 500px;
    margin-right: 500px;
    padding-bottom: 30px;
    background-color:aliceblue;
     box-shadow: 5px 5px 5px 5px;
    border-radius:10px;
    margin-top:40px;
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
</style>