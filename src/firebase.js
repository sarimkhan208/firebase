// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Wl8c8Vf23uvrRf2n_pYLtg0abSKClPQ",
  authDomain: "fir-practice-ad2ed.firebaseapp.com",
  projectId: "fir-practice-ad2ed",
  storageBucket: "fir-practice-ad2ed.appspot.com",
  messagingSenderId: "187709635933",
  appId: "1:187709635933:web:396c52f77260892c79fcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app,auth}