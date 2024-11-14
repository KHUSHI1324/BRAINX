// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhMUrqwCF-2obA4w-O1ENTCkLmHm7_5E",
  authDomain: "mhcp-9dc44.firebaseapp.com",
  projectId: "mhcp-9dc44",
  storageBucket: "mhcp-9dc44.appspot.com",
  messagingSenderId: "396166223578",
  appId: "1:396166223578:web:81dd2454d00e2ffe8237e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app)
export default app;