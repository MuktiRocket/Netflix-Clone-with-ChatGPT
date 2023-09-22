// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB_xuTPp0OP2-G_14rv7SRwpNwsdHAULY",
  authDomain: "netflixgpt-fc83d.firebaseapp.com",
  projectId: "netflixgpt-fc83d",
  storageBucket: "netflixgpt-fc83d.appspot.com",
  messagingSenderId: "503538129252",
  appId: "1:503538129252:web:7a62ece1f2b78405d84271",
  measurementId: "G-M250CDYH2S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
