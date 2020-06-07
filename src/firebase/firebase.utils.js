import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCqjkuJk-JX3uJhYC6hTMKJb-ByW2fO15g",
    authDomain: "crwn-db-71306.firebaseapp.com",
    // authDomain: "crwn-db-71306.web.app",
    databaseURL: "https://crwn-db-71306.firebaseio.com",
    projectId: "crwn-db-71306",
    storageBucket: "crwn-db-71306.appspot.com",
    messagingSenderId: "978043454481",
    appId: "1:978043454481:web:49fe2820d1407f8c551db0",
    measurementId: "G-KG7QNVPC5S"
};

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore =firebase.firestore();

const Provider= new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;