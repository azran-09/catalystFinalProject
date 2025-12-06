// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDLlRf3BuxynN8mLCIZGA08GsfkjkUkqvg",
  authDomain: "y-cs-final-project.firebaseapp.com",
  projectId: "y-cs-final-project",
  storageBucket: "y-cs-final-project.firebasestorage.app",
  messagingSenderId: "130391422324",
  appId: "1:130391422324:web:c9fd03c831b32012eca821",
  measurementId: "G-BZS2TETZYP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);