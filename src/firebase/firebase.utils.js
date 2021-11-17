import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB8cbFXTNeOa51YKVXE5esZwXbXjWh4Lcw",
    authDomain: "crown-db-9ede8.firebaseapp.com",
    projectId: "crown-db-9ede8",
    storageBucket: "crown-db-9ede8.appspot.com",
    messagingSenderId: "852915037495",
    appId: "1:852915037495:web:150bb399edcb9aaf85a6b2",
    measurementId: "G-DHK0YZYJ7Y"
  }

  firebase.initializeApp(config);

  export const auth  = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;