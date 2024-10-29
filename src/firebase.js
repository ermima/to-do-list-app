// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw4e5VYJt97iYgP4ghVLUmOCMWuRSrnwk",
  authDomain: "to-do-list-app-e67e9.firebaseapp.com",
  projectId: "to-do-list-app-e67e9",
  storageBucket: "to-do-list-app-e67e9.appspot.com",
  messagingSenderId: "438934702487",
  appId: "1:438934702487:web:a85b5227b56960546ddcd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);