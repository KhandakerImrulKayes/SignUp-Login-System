import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3mX38utAQkaCjF6WTYsX0wWm1fhcTA0g",
  authDomain: "login-signup-system-563c9.firebaseapp.com",
  projectId: "login-signup-system-563c9",
  storageBucket: "login-signup-system-563c9.firebasestorage.app",
  messagingSenderId: "830215795617",
  appId: "1:830215795617:web:452ace8f073677388d51e0",
  measurementId: "G-55R0HR8F10"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
