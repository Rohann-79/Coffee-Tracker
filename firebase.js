// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvjbeEYKccU5BhJ7JeBpxrBSfOumTVoes",
  authDomain: "caffiend-d9665.firebaseapp.com",
  projectId: "caffiend-d9665",
  storageBucket: "caffiend-d9665.firebasestorage.app",
  messagingSenderId: "965139878464",
  appId: "1:965139878464:web:8715c31418c8d0a36c45a5",
  measurementId: "G-24SNYVXESH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)