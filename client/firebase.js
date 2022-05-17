// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBiFavjrvlGN0KcNqXOFTX_5FVO8dSEcEM",
  authDomain: "petsnpalsweb-b8a76.firebaseapp.com",
  projectId: "petsnpalsweb-b8a76",
  storageBucket: "petsnpalsweb-b8a76.appspot.com",
  messagingSenderId: "884209973918",
  appId: "1:884209973918:web:d257728d6afb9a17fc598f",
  measurementId: "G-MJDRRV9SML"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 
export {auth};