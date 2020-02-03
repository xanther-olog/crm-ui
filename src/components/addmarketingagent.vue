<template>
  <div>
    <h1>ADD MARKETING AGENT</h1>
    <div class="login1">
      <div class="register">
        <h1>Register here</h1>
        <br />
        <br />
        <form name="maForm" action="<IP>">
          <input type="text" placeholder="username" name="username" v-model="username" required />
          <br />
          <br />
          <input type="email" placeholder="enter email" name="email" v-model="email" required />
          <br />
          <br />
          <input type="password" placeholder="password" name="pwd" v-model="pwd" required />
          <br />
          <div class="checkboxes">
            <input type="checkbox" name="Literature" value="Literature" v-model="checkedNames" />Literature
            <input
              type="checkbox"
              name="Technology"
              value="Technology"
              v-model="checkedNames"
            />Technology
            <input
              type="checkbox"
              name="Lifestyle"
              value="Lifestyle"
              v-model="checkedNames"
            />Lifestyle
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
// import axios from ‘axios’;
export default {
  name: "addmarketingagent1",
  data() {
    return {
      checkedNames: []
    };
  },
  methods: {
    registrationSuccess() {
      alert("Registration success!")
    },
    registerMASuccess() {
      let marketingAgentId = localStorage.getItem("marketAgentUserId");
      let marketingAgentName = localStorage.getItem("maname");
      let marketingAgentEmail = localStorage.getItem("maEmail");
      let leadsConverted = 0;
      let leadsPending = 0;
      let category = this.checkedNames;
      let data = {
        marketingAgentId: marketingAgentId,
        marketingAgentName: marketingAgentName,
        marketingAgentEmail: marketingAgentEmail,
        leadsConverted: leadsConverted,
        leadsPending: leadsPending,
        category: category
      };
      this.$store.dispatch("registerMA", {
        params: {
          data: data
        },
        success: this.registrationSuccess
      });
    },
    getAllSelectedValue() {
      let name = this.username;
      let emailAddress = this.email;
      let password = this.pwd;
      let data = {
        name: name,
        emailAddress: emailAddress,
        password: password
      };
      window.console.log(data);
      this.$store.dispatch("register", {
        params: {
          data: data
        },
        success: this.registerMASuccess
      });
    }
  }
};
</script>
<style scoped>
.login1 {
  text-align: center;
  border: 2px solid black;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  background-color: aliceblue;
  box-shadow: 5px 5px 5px 5px;
  border-radius: 10px;
  margin-top: 40px;
  width: 600px;
}
input {
  width: 220px;
  padding: 0;
  height: 30px;
  position: relative;
  margin: 10px;
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
.checkboxes {
  display: flex;
  flex-direction: row;
}
</style>
