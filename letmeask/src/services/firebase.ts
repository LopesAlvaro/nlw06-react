import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAd8WKeqdl5Fi3OcxHu9H1RPvI4rK14k00",
    authDomain: "letmeask-51eea.firebaseapp.com",
    databaseURL: "https://letmeask-51eea-default-rtdb.firebaseio.com",
    projectId: "letmeask-51eea",
    storageBucket: "letmeask-51eea.appspot.com",
    messagingSenderId: "23978743962",
    appId: "1:23978743962:web:5efca7498e7ebc3c21e723"
  };

  firebase.initializeApp(firebaseConfig);