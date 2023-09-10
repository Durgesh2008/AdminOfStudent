import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// 1055619088983-iqidjotfg1lfknvb39gc0564mqhvp8m1.apps.googleusercontent.com
const firebaseConfig = {
  apiKey: "AIzaSyAvbmAmPm7791HbxtKnQ0hP6V0TcgnrqbY",
  authDomain: "phone-auth-c9524.firebaseapp.com",
  projectId: "phone-auth-c9524",
  storageBucket: "phone-auth-c9524.appspot.com",
  messagingSenderId: "1055619088983",
  appId: "1:1055619088983:web:f2a5cf480f220fab8d5912"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);