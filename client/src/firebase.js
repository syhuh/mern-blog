// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-888de.firebaseapp.com",
  projectId: "mern-blog-888de",
  storageBucket: "mern-blog-888de.appspot.com",
  messagingSenderId: "1001733220785",
  appId: "1:1001733220785:web:d07ab9ce1be5f39beb7590",
  measurementId: "G-56MGM4JMRF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
