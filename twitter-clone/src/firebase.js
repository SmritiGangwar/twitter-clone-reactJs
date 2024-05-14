
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";  //For authentication
import "firebase/compat/database";  //For Database  .... no need in this project
import "firebase/compat/firestore";   //For Firestore


const firebaseConfig = {
  apiKey: "AIzaSyBUScbd2p0NEwGZuHCWrfXsMLZRBtY1jM4",
  authDomain: "twitter-clone-eab24.firebaseapp.com",
  databaseURL: "https://twitter-clone-eab24-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-eab24",
  storageBucket: "twitter-clone-eab24.appspot.com",
  messagingSenderId: "533002691158",
  appId: "1:533002691158:web:b37bdcb9cc2f46ce3791f7",
  measurementId: "G-TSGC834SQV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;