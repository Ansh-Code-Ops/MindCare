import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration (Replace with your Firebase project's config)
const firebaseConfig = {
    apiKey: "AIzaSyBY1bd0GTo2t7_oF2RT3FcdhMBsaqQO1BY",
  authDomain: "mindcare-165e5.firebaseapp.com",
  projectId: "mindcare-165e5",
  storageBucket: "mindcare-165e5.firebasestorage.app",
  messagingSenderId: "928750795372",
  appId: "1:928750795372:web:c8c2e78ee3eed6b010b649",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
