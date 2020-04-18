import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import FirebaseConfig from "./firebase_config";

firebase.initializeApp(FirebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;