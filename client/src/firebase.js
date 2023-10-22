// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "housing-webapp.firebaseapp.com",
  projectId: "housing-webapp",
  storageBucket: "housing-webapp.appspot.com",
  messagingSenderId: "341358996610",
  appId: "1:341358996610:web:f66edc49f6316876d9189b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
