<template>
  <div class="maindiv">
    <div id="nav">
      <ul>
        <li id="assignma">
          <!-- <a href="#" id="1" v-on:click="select($event)">My Leads</a> -->
          <h1>SELECT LEAD</h1>
        </li>
        <!-- <li>
          <a class="logout" href="#">Logout</a>
        </li> -->
                 <a class="logout" @click="logout()"><h2>Logout</h2></a>
        
      </ul>
      
    </div>
    <div class="leadsDiv">
      <select @change="onchange($event)" class="select-css">
        <option value selected disabled>Choose here</option>
        <option
          v-for="l in leadList1"
          v-bind:key="l.leadId"
          v-bind:value="l.leadId"
        >{{l.leadName}}</option>
       </select> 
     </div>
    <div class="leadDetails"> 
      <h3>Lead ID: {{ leadkasaaman.leadId }}</h3>
      <h3>Lead Name: {{ leadkasaaman.leadName }}</h3>
      <h3>Lead email: {{ leadkasaaman.leadEmail }}</h3>
      <h3>Post Image:</h3>
      <!-- <div class="extra">
      <input class ="first" type="file" @change="onFileSelected($event)" />
      <br/>
      <button type="file" @click="onUpload">Upload</button>
      </div> -->
      <Upload1/>
      <h3>Post Description:</h3>
      <input class ="second" type="text" name="comments" v-model="comments">
      <button name="close" @click="closelead()">CLOSE LEAD</button>
          <!-- <input type="submit"  value="Submit" @click="sendDetailsToDB"/> -->
    </div>
   
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Upload1 from "../components/image.vue";
export default {
  components: {
    Upload1,
  },
  data() {
    return {
      selectedFile: null
    };
  },
  computed: {
    ...mapGetters(["leadList1"]),
    ...mapGetters(["leadkasaaman"])
  },
  created() {
    this.$store.dispatch("getLeadForMarketAgent");
  },
  methods: {
    onchange(event) {
      const data = event.target.value;
      localStorage.setItem("leadid", data);
      this.$store.dispatch("getLeadDetails");
    },
    onFileSelected(event) {
      // eslint-disable-next-line no-console
      console.log(event);
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      axios.post("API", fd,{onUploadProgress:uploadEvent=>{
        window.console.log("Upload Progress: "+Math.round(uploadEvent.loaded/uploadEvent.total * 100)+"%")
      }}).then(res => {
        // eslint-disable-next-line no-console
        console.log(res)
      });
    },
    closelead(){
        axios.post("http://172.16.20.161:8090/marketingAgent/uploadComments" , {
            leadId:localStorage.getItem("leadid"),
            comment:this.comments,
            image:localStorage.getItem('imgUrl'),
            video:"null",
            document:"null"
        }).then(res=>{
            // eslint-disable-next-line no-console
            console.log(res.data)
            alert("Lead has been closed!")
        })
        axios.get("http://172.16.20.161:8090/marketingAgent/closeLead/" + localStorage.getItem('leadid')).
        then(res=>{
            // eslint-disable-next-line no-console
            console.log(res.data)
        })
    },logout(){
        setTimeout(function(){window.location.href='http://localhost:8080/loginmarketingagent'},1000);
    }
  }
};
</script>

<style scoped>

.maindiv{
  justify-content: center;
}
.select-css
{
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    margin:20px;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100px;
    box-sizing: border-box;
    margin: 20px;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #FFFFFF 0%,#E5E5E5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
}
.select-css::-ms-expand {
    display: none;
}
.select-css:hover {
    border-color: #888;
}
.select-css:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
}
.select-css option {
    font-weight:normal;
}

#nav {
  background-color: aliceblue;
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
.leadDetails{
  border:2px solid black;
 border-radius: 20px;
 box-shadow:10px 10px 10px 10px;
 width:500px;

}
.logout{
  float:right;
  color: black;
}
.second{
  height:90px;
  width:190px;
  margin:10px;
}
button{
  height:40px;
  width:90px;
  background-color: black;
  color:white;
  border-radius:10px;
}
</style>