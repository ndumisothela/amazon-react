import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import"firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBWYD7dLir59ok5cwJtXCIqXaOA918K9dw",
    authDomain: "clone-d76ea.firebaseapp.com",
    projectId: "clone-d76ea",
    storageBucket: "clone-d76ea.appspot.com",
    messagingSenderId: "736602126686",
    appId: "1:736602126686:web:fea51838c4d09ffc9c77cf"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();

  const auth = firebase.auth();

  export {db,auth};