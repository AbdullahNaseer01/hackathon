import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCs_CmwZDv7NGUigVOm7jU34mZUQL-FAGI",
  authDomain: "studentportal-f2fbe.firebaseapp.com",
  projectId: "studentportal-f2fbe",
  storageBucket: "studentportal-f2fbe.appspot.com",
  messagingSenderId: "563349324634",
  appId: "1:563349324634:web:5290c950ed9c58f20ce963"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// export const auth = getAuth(app)
export const storage = getStorage(app)
