// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwAYd_xtp0xzxD3MJCk7gKWKROLmUfMHU",
  authDomain: "chatbot-img.firebaseapp.com",
  projectId: "chatbot-img",
  storageBucket: "chatbot-img.appspot.com",
  messagingSenderId: "890732176134",
  appId: "1:890732176134:android:3d81c69edab43e32d0b487",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
