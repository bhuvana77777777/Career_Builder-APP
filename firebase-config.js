// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBKHpckC_rlxstwFHxAiYhyB5jWWAjQa0",
  authDomain: "career-7-d302f.firebaseapp.com",
  projectId: "career-7-d302f",
  storageBucket: "career-7-d302f.appspot.com",
  messagingSenderId: "965840519583",
  appId: "1:965840519583:web:563fcccc5e2069c4467daa",
  measurementId: "G-ZJ09SK4B28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth
const analytics = getAnalytics(app);

// Export auth and other Firebase services
export { app, auth, analytics };