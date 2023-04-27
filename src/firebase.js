import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXeJc-B6pRKUB7Vou2NjaF4LhMZxVS_bE",
    authDomain: "linkedin-clone-264a3.firebaseapp.com",
    projectId: "linkedin-clone-264a3",
    storageBucket: "linkedin-clone-264a3.appspot.com",
    messagingSenderId: "62998628811",
    appId: "1:62998628811:web:a1cec102cf651287860e4e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
