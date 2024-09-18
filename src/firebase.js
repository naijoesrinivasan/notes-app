// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUP4DNnYqNSMj7PjYv4sXqr6S_NR-UIec",
    authDomain: "notes-app-b6754.firebaseapp.com",
    projectId: "notes-app-b6754",
    storageBucket: "notes-app-b6754.appspot.com",
    messagingSenderId: "556014055792",
    appId: "1:556014055792:web:b3e0ce8e39ea739faf9fb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const notesCollection = collection(db, "notes");