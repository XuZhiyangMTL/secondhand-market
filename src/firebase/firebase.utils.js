import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1WAuRSzo1Ne55q8yrpyglqh_M6TlTy24",
  authDomain: "piratemarket-db.firebaseapp.com",
  projectId: "piratemarket-db",
  storageBucket: "piratemarket-db.appspot.com",
  messagingSenderId: "268436918550",
  appId: "1:268436918550:web:3e4d93ef0065497ccb4037",
  measurementId: "G-9TEFES148Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//we want to always trigger the google popup whenever we use this google auth provider
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
