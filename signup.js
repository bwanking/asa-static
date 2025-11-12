// firebase-config.js

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRmzT3K-zeia4CMNNStbUiWZgzAPc30FU",
  authDomain: "asa-db-994cf.firebaseapp.com",
  projectId: "asa-db-994cf",
  storageBucket: "asa-db-994cf.appspot.com",
  messagingSenderId: "298756488035",
  appId: "1:298756488035:web:8090bc025f245e355d3156"
};

firebase.initializeApp(firebaseConfig);

// Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase initialized:", firebase.app().name);
