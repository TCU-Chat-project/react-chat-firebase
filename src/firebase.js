import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiuChjDOYDrlzZ8nLt9sQUiXIQb-ZI-DU",
  authDomain: "chat-75240.firebaseapp.com",
  projectId: "chat-75240",
  storageBucket: "chat-75240.appspot.com",
  messagingSenderId: "759915782257",
  appId: "1:759915782257:web:ae969a82aeb26c412ffbd0",
  measurementId: "G-LRR9ZTWLDW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
