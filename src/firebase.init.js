// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx_WepWnym4c66Zt0dL4_U5ws6WI-srvA",
  authDomain: "ema-john-simple-67dd5.firebaseapp.com",
  projectId: "ema-john-simple-67dd5",
  storageBucket: "ema-john-simple-67dd5.appspot.com",
  messagingSenderId: "461315855673",
  appId: "1:461315855673:web:ed38ebdea2a094d08b84e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
