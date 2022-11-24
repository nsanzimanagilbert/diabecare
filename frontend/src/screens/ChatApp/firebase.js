import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChomPCxt7c495F7Km9XSROYSDnX55NocM",
  authDomain: "doctalk-cf8b8.firebaseapp.com",
  projectId: "doctalk-cf8b8",
  storageBucket: "doctalk-cf8b8.appspot.com",
  messagingSenderId: "1025082903681",
  appId: "1:1025082903681:web:88591aa94d155bbede1180",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
