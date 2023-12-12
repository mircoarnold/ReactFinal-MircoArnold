import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKaS64D63SPOAlD0MJvW_kv5sTP4OVauI",
  authDomain: "react-pf-final.firebaseapp.com",
  projectId: "react-pf-final",
  storageBucket: "react-pf-final.appspot.com",
  messagingSenderId: "16449193541",
  appId: "1:16449193541:web:1bc8e7bd13ba470ee1452c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
