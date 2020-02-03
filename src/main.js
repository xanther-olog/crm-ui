import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
//import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
var firebaseConfig = {
  apiKey: "AIzaSyBrY2DTFnM0sxdnnmjJiBrFIwtGY6so98I",
  authDomain: "crm2-12bd6.firebaseapp.com",
  databaseURL: "https://crm2-12bd6.firebaseio.com",
  projectId: "crm2-12bd6",
  storageBucket: "crm2-12bd6.appspot.com",
  messagingSenderId: "52486938800",
  appId: "1:52486938800:web:898efc07e71c50e3c69b75",
  measurementId: "G-WPTWZC5QLT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
