// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCTHRBSsaE0JpBc6Fr3J1qDWwmhkKyZV-U",
  authDomain: "react-firebase-3a4d0.firebaseapp.com",
  projectId: "react-firebase-3a4d0",
  storageBucket: "react-firebase-3a4d0.appspot.com",
  messagingSenderId: "485027551522",
  appId: "1:485027551522:web:95b1f09e8ea90419ea2d7b",
  measurementId: "G-D6L1QJE9T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)