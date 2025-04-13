// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDfZQENEfRtYrKvonWdV88iO2fMiSw7I0",
  authDomain: "community-marketplace-ap-47d01.firebaseapp.com",
  projectId: "community-marketplace-ap-47d01",
  storageBucket: "community-marketplace-ap-47d01.firebasestorage.app",
  messagingSenderId: "788440817680",
  appId: "1:788440817680:web:5aa8f8c22eabdde5a52a95",
  measurementId: "G-HND60P56WZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);