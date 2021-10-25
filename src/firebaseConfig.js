import { initializeApp } from "firebase/app";
//Firebase was used to authenticate the app.
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA_dtxGAOIxs3I3cugGzgIr0DPFp2jWMGo",
  authDomain: "uncgym-6c9eb.firebaseapp.com",
  projectId: "uncgym-6c9eb",
  storageBucket: "uncgym-6c9eb.appspot.com",
  messagingSenderId: "1079655457431",
  appId: "1:1079655457431:web:acb7003e22ea7965adbfd2",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
};
