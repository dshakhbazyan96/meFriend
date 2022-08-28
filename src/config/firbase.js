// Import the functions you need from the SDKs you need;
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use;
// https://firebase.google.com/docs/web/setup#available-libraries;

// Your web app's Firebase configuration;
const firebaseConfig = {
    apiKey: "AIzaSyAFb-10yeGg9dVyFznDCYLqintevL0UhrE",
    authDomain: "invest-project-af525.firebaseapp.com",
    projectId: `invest-project-af525`,
    storageBucket: `invest-project-af525.appspot.com`,
    messagingSenderId: "177814543547",
    appId: "1:177814543547:web:00c799aded4da4630bdd9e"
};

// Initialize Firebase
const app = () => initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;