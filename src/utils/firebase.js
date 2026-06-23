// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
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