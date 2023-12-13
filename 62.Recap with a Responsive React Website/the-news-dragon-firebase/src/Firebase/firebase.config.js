// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcQszRUtf_AjQuVkFVWeO2WhEC9ulfS9A",
  authDomain: "the-news-dragon-firebase-2ff7b.firebaseapp.com",
  projectId: "the-news-dragon-firebase-2ff7b",
  storageBucket: "the-news-dragon-firebase-2ff7b.appspot.com",
  messagingSenderId: "180903973591",
  appId: "1:180903973591:web:99e65ad8f7f845e28e1692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;