// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFRmf00XHPzc2J4Kq6icqbCC1hiTxGYsQ",
  authDomain: "e-food-4f816.firebaseapp.com",
  projectId: "e-food-4f816",
  storageBucket: "e-food-4f816.firebasestorage.app",
  messagingSenderId: "946598865956",
  appId: "1:946598865956:web:c26d8921d5ef79cd3a3cb1",
  measurementId: "G-NXE52NWYCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
