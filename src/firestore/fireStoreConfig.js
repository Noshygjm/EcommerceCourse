// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpemMaodfJQvRkW6g8NwqcIxWnm3uuOZM",
  authDomain: "ecommerce-3ce89.firebaseapp.com",
  projectId: "ecommerce-3ce89",
  storageBucket: "ecommerce-3ce89.firebasestorage.app",
  messagingSenderId: "374216027726",
  appId: "1:374216027726:web:e3c2a8411002b2aafcdd1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore
export const db = getFirestore(app);