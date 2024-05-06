import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBvlEoyCQ4B-oUsXWjzZWsn_rIqvXf9jfM",
  authDomain: "projetoweb-cb46f.firebaseapp.com",
  projectId: "projetoweb-cb46f",
  storageBucket: "projetoweb-cb46f.appspot.com",
  messagingSenderId: "869650466006",
  appId: "1:869650466006:web:0bb6b645f33b5a2d4a7577",
  measurementId: "G-5QHVZ9X734"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;