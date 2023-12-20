import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8IuWGLi6xBvXo4CMqDdyQLfHgxlCjkAE",
  authDomain: "thunderaheathcard.firebaseapp.com",
  projectId: "thunderaheathcard",
  storageBucket: "thunderaheathcard.appspot.com",
  messagingSenderId: "193634513802",
  appId: "1:193634513802:web:07a92278b1f00b354bce73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
