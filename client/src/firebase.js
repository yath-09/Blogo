// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogo-146a8.firebaseapp.com",
  projectId: "blogo-146a8",
  storageBucket: "blogo-146a8.appspot.com",
  messagingSenderId: "297747992757",
  appId: "1:297747992757:web:e84d1ad825487a153e6efc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);