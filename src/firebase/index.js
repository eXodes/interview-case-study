import firebaseConfig from '@/secret';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
firebase.initializeApp(firebaseConfig);

// export const analytics = firebase.analytics();
export const auth = firebase.auth();
export const database = firebase.firestore();
export const dbUsers = database.collection('users');
