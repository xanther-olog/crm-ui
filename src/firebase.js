import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAONNfLZ6gLk8kQaoLj10hzflyxUvCtItw",
    authDomain: "login-microservice-ammonation.firebaseapp.com",
    databaseURL: "https://login-microservice-ammonation.firebaseio.com",
    projectId: "login-microservice-ammonation",
    storageBucket: "login-microservice-ammonation.appspot.com",
    messagingSenderId: "084539004734"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}