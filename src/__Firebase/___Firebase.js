
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyC-IDKFqdS3jkAUy4U5wr5D3IgrmdDInBc",
  authDomain: "react-mohamilon-69.firebaseapp.com",
  projectId: "react-mohamilon-69",
  storageBucket: "react-mohamilon-69.appspot.com",
  messagingSenderId: "538561469658",
  appId: "1:538561469658:web:3edf337ed75d996935d9e3"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;