// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXZOvCc9s5G581V9E7aB24FnbCUnW0kRs",
    authDomain: "auth-moha-milon-d9f52.firebaseapp.com",
    projectId: "auth-moha-milon-d9f52",
    storageBucket: "auth-moha-milon-d9f52.appspot.com",
    messagingSenderId: "543617749095",
    appId: "1:543617749095:web:d3a4cf7d1bf23c34b5c4c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
