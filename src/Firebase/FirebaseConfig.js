<<<<<<< HEAD
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);
const FirebaseFirestore = getFirestore(FirebaseApp);
const FirebaseStorage = getStorage(FirebaseApp);

const db = FirebaseFirestore;

export { FirebaseApp, FirebaseAuth, FirebaseFirestore, FirebaseStorage, db };
=======
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIhBiO3flFpAcL2Fm_Ef22QQo6udFp5b4",
  authDomain: "react-netflix-eb4f0.firebaseapp.com",
  projectId: "react-netflix-eb4f0",
  storageBucket: "react-netflix-eb4f0.appspot.com",
  messagingSenderId: "29045190704",
  appId: "1:29045190704:web:a7c74bd778aa5f993c7df5",
  measurementId: "G-9TB7LL3YPM",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
>>>>>>> becf846 (msg)
