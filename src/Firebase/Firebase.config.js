// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4liZx7ZfTqsbRDaBl5hEanF8IMiWyz54",
  authDomain: "world-news-ce6c9.firebaseapp.com",
  projectId: "world-news-ce6c9",
  storageBucket: "world-news-ce6c9.appspot.com",
  messagingSenderId: "684466921678",
  appId: "1:684466921678:web:26482d6d51aa3c97d3f09f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;