// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJyX450Q8VIcdi-_NnMEEKvGyqra18-uk",
    authDomain: "the-eater.firebaseapp.com",
    projectId: "the-eater",
    storageBucket: "the-eater.appspot.com",
    messagingSenderId: "372969687265",
    appId: "1:372969687265:web:064ba72930285bfba24fa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;