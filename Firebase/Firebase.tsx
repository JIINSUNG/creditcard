// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbOtsNwjsvxuaKNLeA0cc9h82Zz0LkxXQ",
    authDomain: "creditcard-af6e6.firebaseapp.com",
    projectId: "creditcard-af6e6",
    storageBucket: "creditcard-af6e6.appspot.com",
    messagingSenderId: "451303652077",
    appId: "1:451303652077:web:569a38208000ec482f2ae4",
    measurementId: "G-0RF9EYR74W"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  
  export {app, auth}