<template>
<div>
<h1>ADD SERVICE AGENT</h1>
  <div class="login">
      <h1>Register here</h1>
      <br><br>
<input type="text" placeholder="username">
<br><br>
<input type="email" placeholder="enter email">
<br><br>
<input type="text" placeholder="Mobile">
<br><br>
<input type="password" placeholder="password">
<br>
<br>
<button> REGISTER</button>
  </div>
</div>
</template>
<script>
export default {
    name:"addagent1"
};
</script>
<style>
.login{
    text-align: center;
    border: 2px solid black;
    margin-left: 500px;
    margin-right: 500px;
    padding-bottom: 30px;
    background-color:bisque;
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