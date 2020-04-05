import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAy7fxEyhgKpfLtJaFdu0GXgAAhv6Np_ag",
  authDomain: "crwn-clothing-9e7c8.firebaseapp.com",
  databaseURL: "https://crwn-clothing-9e7c8.firebaseio.com",
  projectId: "crwn-clothing-9e7c8",
  storageBucket: "crwn-clothing-9e7c8.appspot.com",
  messagingSenderId: "116326116170",
  appId: "1:116326116170:web:19cf6d14b99ca97e0bafb3",
  measurementId: "G-X495CRF164",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
