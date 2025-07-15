// Firebase v8 Config
const firebaseConfig = {
  apiKey: "AIzaSyA1Lx114VTqRNU2sM0rfEqwLSuZyoSefqs",
  authDomain: "friends-zone-c2fe8.firebaseapp.com",
  projectId: "friends-zone-c2fe8",
  storageBucket: "friends-zone-c2fe8.firebasestorage.app",
  messagingSenderId: "962940178101",
  appId: "1:962940178101:web:330aa526d4e7b012dff8fc",
  measurementId: "G-VPGKVYTKD1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
