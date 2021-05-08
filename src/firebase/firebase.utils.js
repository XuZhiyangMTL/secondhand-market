import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyArhQKNGsc_Hlz8EGTYbFD9cSyErSL6f68",
	authDomain: "market-8af41.firebaseapp.com",
	databaseURL: "https://market-8af41-default-rtdb.firebaseio.com",
	projectId: "market-8af41",
	storageBucket: "market-8af41.appspot.com",
	messagingSenderId: "569964742856",
	appId: "1:569964742856:web:f5b0ff9f713fd1e2bbfdfd",
	measurementId: "G-CFL6HYFJ8X",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
