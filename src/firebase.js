import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBsSUZI6BWm5_Av-ep49skCYvhDlDkvt1k",
    authDomain: "zetflix-4a20f.firebaseapp.com",
    projectId: "zetflix-4a20f",
    storageBucket: "zetflix-4a20f.appspot.com",
    messagingSenderId: "1011603131399",
    appId: "1:1011603131399:web:cfd5aa2d181fe73fdf6ea2"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth} ;
export default db;