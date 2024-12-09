import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB3fcDhsJs8smn8sSQyp81Iu_aBgN0vfAs",
  authDomain: "clone-9c5bb.firebaseapp.com",
  projectId: "clone-9c5bb",
  storageBucket: "clone-9c5bb.appspot.com", // Corrected storageBucket
  messagingSenderId: "582311634121",
  appId: "1:582311634121:web:31de0abdce064399871918"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get Firestore and Auth instances from compat (v8-style)
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
