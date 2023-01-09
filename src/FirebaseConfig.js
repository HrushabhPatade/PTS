// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyBFeGs3Ua9S4DpK5JmlhOvG60HqFmyNjVg",
  authDomain: "ptsweb-87f11.firebaseapp.com",
  projectId: "ptsweb-87f11",
  storageBucket: "ptsweb-87f11.appspot.com",
  messagingSenderId: "82456997527",
  appId: "1:82456997527:web:455701f773bac7c73003d2"
};

// Initialize Firebase
const app = Firebase.initializeApp(FirebaseConfig);
export default app;