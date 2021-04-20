// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNslLwus72iQxrPxweT2Xe3izqASxkF50",
  authDomain: "slack-clone-redux-b0b28.firebaseapp.com",
  projectId: "slack-clone-redux-b0b28",
  storageBucket: "slack-clone-redux-b0b28.appspot.com",
  messagingSenderId: "626602935886",
  appId: "1:626602935886:web:3552b36507ae6441cee51f",
  measurementId: "G-2P74GBH5VB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default  { auth, provider, db };
