import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyBJd1U9v3U7JWW2VdQDbBK4-eG3u9gLmt4",
  
    authDomain: "appcha-425ce.firebaseapp.com",
  
    databaseURL: "https://appcha-425ce-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "appcha-425ce",
  
    storageBucket: "appcha-425ce.appspot.com",
  
    messagingSenderId: "284767240775",
  
    appId: "1:284767240775:web:d9727dc40ef1bdd98ba762",
  
    measurementId: "G-60CMX7CFTR"
  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
