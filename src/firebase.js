import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "-",
    authDomain: "-",
    databaseURL: "-",
    projectId: "login-microservice-ammonation",
    storageBucket: "login-microservice-ammonation.appspot.com",
    messagingSenderId: "084539004734"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}