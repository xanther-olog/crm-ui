<template>
  <div>
    <h1>ADMIN LOGIN</h1>
    <div class="login">
      <br />
      <br />
      <form name="maForm">
        <input type="text" placeholder="enter username" name="username" v-model="username" />
        <br />
        <br />
        <input type="password" placeholder="password" name="pwd" v-model="pwd" />
        <br />
      </form>
      <br />
      <button @click="loginAdmin()">LOGIN</button>
    </div>
  </div>
</template>

<script>
export default {
    
methods: {
    loginAdmin() {
        if(this.username==="admin" && this.pwd==="admin"){
            localStorage.setItem("isAdminLoggedIn","true")
            window.location.replace("http://localhost:8080/adminlogin")
        }else{
            alert("Invalid credentials!");
        }
    }
  }

}
</script>

<style scoped>
.login {
  text-align: center;
  border: 2px solid black;
  margin-left: 500px;
  margin-right: 500px;
  padding-bottom: 30px;
  background-color: aliceblue;
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
</style>