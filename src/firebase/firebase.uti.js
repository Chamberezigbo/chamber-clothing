import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDNLsA4883LMC6NMzujBmC-_lRpOxKfqpg",
    authDomain: "chamber-clothing-db.firebaseapp.com",
    projectId: "chamber-clothing-db",
    storageBucket: "chamber-clothing-db.appspot.com",
    messagingSenderId: "48260968156",
    appId: "1:48260968156:web:a616efc263391d3a9f0e19",
    measurementId: "G-MDQV6CTMSD"
};
  
firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;