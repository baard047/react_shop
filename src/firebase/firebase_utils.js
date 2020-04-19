import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import FirebaseConfig from "./firebase_config";

firebase.initializeApp(FirebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserRecord = async (user, additionalData) => {
    if (!user) {
        return;
    }

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
            //TODO user created successful
        } catch (error) {
            console.log('cannot create user record in database ', error.message);
        }
    }

    return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;