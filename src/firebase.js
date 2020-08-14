import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAZDVUOzOS9LodIvbF0y8hS5DdSkdEFdPA",
    authDomain: "crud-aab75.firebaseapp.com",
    databaseURL: "https://crud-aab75.firebaseio.com",
    projectId: "crud-aab75",
    storageBucket: "crud-aab75.appspot.com",
    messagingSenderId: "743405756607",
    appId: "1:743405756607:web:52aa23387adafbe7e9e60a",
    measurementId: "G-WPHYRTEKJL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth } 