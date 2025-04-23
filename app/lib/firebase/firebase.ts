// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
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
