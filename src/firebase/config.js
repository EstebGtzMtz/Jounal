import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-curso-28959.firebaseapp.com",
  projectId: "react-curso-28959",
  storageBucket: "react-curso-28959.appspot.com",
  messagingSenderId: `${import.meta.env.VITE_FIREBASE_API_MESSAGIN_SENDER_ID}`,
  appId: `${import.meta.env.VITE_FIREBASE_API_ID}`
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)