// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1Lx114VTqRNU2sM0rfEqwLSuZyoSefqs",
  authDomain: "friends-zone-c2fe8.firebaseapp.com",
  projectId: "friends-zone-c2fe8",
  storageBucket: "friends-zone-c2fe8.firebasestorage.app",
  messagingSenderId: "962940178101",
  appId: "1:962940178101:web:330aa526d4e7b012dff8fc",
  measurementId: "G-VPGKVYTKD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);