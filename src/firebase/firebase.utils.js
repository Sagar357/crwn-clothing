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

export const createUserProfileDocument= async (userAuth ,additionalData) =>{

    if(!userAuth)
    return;

    const firestoreobj= firestore.doc(`users/${userAuth.uid}`);

    const snapshot= await firestoreobj.get();

    if(!snapshot.exists)
    {
      const  {email ,displayName} = userAuth;
      const createdDate=new Date();

      try
      {
        await firestoreobj.set(
            {
                displayName,
                email,
                createdDate,
                ...additionalData
            }
        );
      }
      catch(error)
      {
        console.log('error in creating user......' ,error.message);
      }
    }
return firestoreobj;
}

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore =firebase.firestore();

const Provider= new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;