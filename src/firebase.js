import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJRF5V7nuSL385iAuJC7PRRAiVREORXG8",
  authDomain: "clone-c1be4.firebaseapp.com",
  projectId: "clone-c1be4",
  storageBucket: "clone-c1be4.appspot.com",
  messagingSenderId: "500656602368",
  appId: "1:500656602368:web:6366a1f08049c62b9287e5",
  measurementId: "G-N9L1K4XSTK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };