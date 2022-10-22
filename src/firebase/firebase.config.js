// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.inv.REACT_APP_apiKey,
  authDomain: process.inv.REACT_APP_authDomain,
  projectId: process.inv.REACT_APP_projectId,
  storageBucket: process.inv.REACT_APP_storageBucket,
  messagingSenderId: process.inv.REACT_APP_messagingSenderId,
  appId: process.inv.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
