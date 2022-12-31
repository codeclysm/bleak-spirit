// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRawFMktoLcoa_LVcIp5K2LcVEOkRWXjo",
  authDomain: "bleak-spirit.firebaseapp.com",
  projectId: "bleak-spirit",
  storageBucket: "bleak-spirit.appspot.com",
  messagingSenderId: "603998055980",
  appId: "1:603998055980:web:2fb45bec5f447c543d2b89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(
  app,
  "https://bleak-spirit-default-rtdb.europe-west1.firebasedatabase.app/"
);
