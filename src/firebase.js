// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA5kD45Pv4pcxc2_0dW_X_kRg6X26yaGg",
  authDomain: "chat-app-320f0.firebaseapp.com",
  projectId: "chat-app-320f0",
  storageBucket: "chat-app-320f0.appspot.com",
  messagingSenderId: "3734964026",
  appId: "1:3734964026:web:bc87d8ae8253607977f203",
  measurementId: "G-7P8P7HQV25"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
