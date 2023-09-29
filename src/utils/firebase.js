// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH0GA9Onz5LIcr7BIfCHpo0GAiiHW77dA",
  authDomain: "netflix-gpt-10849.firebaseapp.com",
  projectId: "netflix-gpt-10849",
  storageBucket: "netflix-gpt-10849.appspot.com",
  messagingSenderId: "382153866988",
  appId: "1:382153866988:web:ee47c123e98be4d16cefc9",
  measurementId: "G-EXY6WNT31J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
