import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import {getStorage} from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyCB9bMLvuCKrFbCwhK3teqdGNolD3Hl704",
  authDomain: "milktea-1b069.firebaseapp.com",
  projectId: "milktea-1b069",
  storageBucket: "milktea-1b069.appspot.com",
  messagingSenderId: "984789821331",
  appId: "1:984789821331:web:2cd8805cf588e921906a66",
  measurementId: "G-669KZWPZQ2"
  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth= getAuth(app);
export const storage = getStorage(app);
