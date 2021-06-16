import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmKdjtJ_CKNs3mU39sQUC0jQcKzuZBUnQ",
    authDomain: "olxclone-a4f0e.firebaseapp.com",
    projectId: "olxclone-a4f0e",
    storageBucket: "olxclone-a4f0e.appspot.com",
    messagingSenderId: "928722576668",
    appId: "1:928722576668:web:54f84ba47073b407ffc6d9",
    measurementId: "G-D0M098JTK2"
  };

export default firebase.initializeApp(firebaseConfig)