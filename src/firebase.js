import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAjDtGOG6_jT2G4IAwCvCvPKGqFmV61Ba0",
    authDomain: "disney-clone-1221c.firebaseapp.com",
    projectId: "disney-clone-1221c",
    storageBucket: "disney-clone-1221c.appspot.com",
    messagingSenderId: "1047348749120",
    appId: "1:1047348749120:web:8dec8f5082f814439650a5",
    measurementId: "G-CN0GDW43SB"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;