<template>
  <div class="mainDiv">
    <div class="categoryDiv">
      <h2>CATEGORY</h2>
      <select @change="onchange($event)" class="select-css">
        <option value selected disabled>Choose here</option>
        <option
          v-for="cat in categories"
          v-bind:key="cat"
          v-bind:value="cat"
        >{{cat}}</option>
      </select>
    </div>
    <div class="leadsDiv">
      <h2>LEADS</h2>
      <select @change="getMA($event)" class="select-css">
        <option value selected disabled>Choose here</option>
        <option
          v-for="l in leads"
          v-bind:key="l.leadId"
          v-bind:value="l.leadId"
        >{{ l.leadName}}</option>
      </select>
    </div>
    <div class="marketingAgentDiv">
      <h2>MARKETING AGENTS</h2>
      <select @change="setMaId($event)" class="select-css">
        <option value selected disabled>Choose here</option>
        <option
          v-for="m in marketagents"
          v-bind:key="m.marketingAgentId"
          v-bind:value="m.marketingAgentId"
        >{{ m.marketingAgentName}}</option>
      </select>
    </div>
    <button @click="passToDb()" class="button3">SUBMIT</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "categories1",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onchange(event) {
      const data = event.target.value;
      localStorage.setItem("id", data);
      this.$store.dispatch("sendId");
    },
    getMA(event) {
      const data1 = event.target.value;
      localStorage.setItem("lid", data1);
      this.$store.dispatch("sendLid");
    },
    setMaId(event) {
      const data2 = event.target.value;
      localStorage.setItem("mid", data2);
      
    },
    passToDb() {
      this.$store.dispatch("send");
      alert("Submitted!")
    }
  },
  computed: {
    ...mapGetters(["categories"]),
    ...mapGetters(["leads"]),
    ...mapGetters(["marketagents"])
  }
};
</script>

<style scoped>
.categoryDiv {
  margin: 20px;
  height: 17px;
}
.leadsDiv {
  margin: 20px;
  height: 17px;
}
.marketingAgentDiv {
  margin: 20px;
  height: 17px;
}
.mainDiv {
  display: flex;
  margin-top: 90px;
  justify-content: center;
}
.button3 {
  width: 120px;
  height: 30px;
  margin-top: 100px;
  margin-right: 150px;
  background-color: blue;
  color: wheat;
  border-radius: 15px;
}
.select-css {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
.select-css::-ms-expand {
  display: none;
}
.select-css:hover {
  border-color: #888;
}
.select-css:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
.select-css option {
  font-weight: normal;
}

</style>
