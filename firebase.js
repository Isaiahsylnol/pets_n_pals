// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiFavjrvlGN0KcNqXOFTX_5FVO8dSEcEM",
  authDomain: "petsnpalsweb-b8a76.firebaseapp.com",
  projectId: "petsnpalsweb-b8a76",
  storageBucket: "petsnpalsweb-b8a76.appspot.com",
  messagingSenderId: "884209973918",
  appId: "1:884209973918:web:d257728d6afb9a17fc598f",
  measurementId: "G-MJDRRV9SML"
};

if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);