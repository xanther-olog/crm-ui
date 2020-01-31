<template>
  <div class="maindiv">
    <div id="nav">
      <ul>
        <li id="assignma">
          <a href="#" id="1" v-on:click="select($event)">My Leads</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
    <div class="leadsDiv">
      <select @change="onchange($event)" class="select-css">
        <option value selected disabled>Choose here</option>
        <option
          v-for="l in leadList1"
          v-bind:key="l.subCategoryId"
          v-bind:value="l.subCategoryId"
        >{{l.subCategoryDetails}}</option>
      </select>
    </div>
    <div class="leadDetails">
      <h3>Lead ID: {{ leadkasaaman.leadId }}</h3>
      <h3>Lead Name: {{ leadkasaaman.leadName }}</h3>
      <h3>Lead email: {{ leadkasaaman.leadEmail }}</h3>
      <h3>Post Image/Video:</h3>
      <input type="file" @change="onUploadImage($event)" />
      <button @click="onUpload">Upload</button>
      <h3>Post Description:</h3>
    </div>
  </div>
</template>



<script>
import { mapGetters } from "vuex";
// eslint-disable-next-line no-unused-vars
import {fb,db} from '../firebase';
// import firebase from '@firebase/app'
// import 'firebase/firestore'
// import 'firebase/firebase-auth'
// import 'firebase/storage'
export default {
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
    this.$store.dispatch("getLeadForMarketAgent", {});
  },
  methods: {
    onchange(event) {
      const data = event.target.value;
      localStorage.setItem("leadid", data);
      this.$store.dispatch("getLeadDetails");
    },
    // onFileSelected(event) {
    //   // eslint-disable-next-line no-console
    //   console.log(event);
    //   this.selectedFile = event.target.files[0];
    // },
    // onUpload() {
    //   const fd = new FormData();
    //   fd.append("image", this.selectedFile, this.selectedFile.name);
    //   axios.post("API", fd,{onUploadProgress:uploadEvent=>{
    //     window.console.log("Upload Progress: "+Math.round(uploadEvent.loaded/uploadEvent.total * 100)+"%")
    //   }}).then(res => {
    //     // eslint-disable-next-line no-console
    //     console.log(res)
    //   });
    // }
      onUploadImage(event){
          let file=event.target.files[0];
          var storageRef=fb.storage().ref(file.name);
          storageRef.put(file);



      }
  }
};
</script>

<style scoped>
#nav {
  background-color: rgb(248, 58, 58);
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
</style>