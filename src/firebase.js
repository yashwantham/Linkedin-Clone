// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0Fl27ead-dCo9MIUonUXSU6afzcGylFM",
    authDomain: "linkedin-clone-yt-e0e27.firebaseapp.com",
    projectId: "linkedin-clone-yt-e0e27",
    storageBucket: "linkedin-clone-yt-e0e27.appspot.com",
    messagingSenderId: "286832375732",
    appId: "1:286832375732:web:52d21b3a67fedf0e4b24e1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);     //initializing the firebase app
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };