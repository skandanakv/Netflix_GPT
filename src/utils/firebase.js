// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUUB9sHC9XnJVEfczNNWpXSb_82TJIqMA",
  authDomain: "netflixgpt-f57ce.firebaseapp.com",
  projectId: "netflixgpt-f57ce",
  storageBucket: "netflixgpt-f57ce.firebasestorage.app",
  messagingSenderId: "700667035551",
  appId: "1:700667035551:web:3cda7e5c789655364b87aa",
  measurementId: "G-1L7SH060DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);