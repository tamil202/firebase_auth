// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDXNKjB8x6LI63hmmMu2teeDn0NIacI358",
  authDomain: "sample-auth-9ddac.firebaseapp.com",
  projectId: "sample-auth-9ddac",
  storageBucket: "sample-auth-9ddac.appspot.com",
  messagingSenderId: "62118805311",
  appId: "1:62118805311:web:ce504f2509d7e737e89d8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
