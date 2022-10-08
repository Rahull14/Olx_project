import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAftSTr0dH0_mJfJZgdNRRkGrm1hv8PTRo",
    authDomain: "olx-project-49956.firebaseapp.com",
    projectId: "olx-project-49956",
    storageBucket: "olx-project-49956.appspot.com",
    messagingSenderId: "183091027681",
    appId: "1:183091027681:web:e4375b9b0a5593276f21a0",
    measurementId: "G-MD4F2CW6LQ"
  };

 export default firebase.initializeApp(firebaseConfig)
 