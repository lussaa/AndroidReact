// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseManager = {
  apiKey: "AIzaSyArR4LaOuAjm3_FtT5WAEGlYSyiVgkahLU",
  authDomain: "vamos-007.firebaseapp.com",
  projectId: "vamos-007",
  storageBucket: "vamos-007.appspot.com",
  messagingSenderId: "761977439412",
  appId: "1:761977439412:web:fae2bc1d5c99192a0c43e1",
  measurementId: "G-8EM4QQSL20"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseManager);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(app);