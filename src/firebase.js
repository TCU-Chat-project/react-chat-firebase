import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDftrs5qMQ2U18N8q414oKQGzKfi_Rc7to",
  authDomain: "tcu-chat.firebaseapp.com",
  projectId: "tcu-chat",
  storageBucket: "tcu-chat.appspot.com",
  messagingSenderId: "189855757065",
  appId: "1:189855757065:web:984e768a6067d8811bd9d8",
  measurementId: "G-TYESCDRJ60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
