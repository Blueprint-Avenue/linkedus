import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDjNxAK8LcQLSQ10EAS3VJ4bUXVhs68LdQ",
	authDomain: "linkedus-1e49b.firebaseapp.com",
	projectId: "linkedus-1e49b",
	storageBucket: "linkedus-1e49b.appspot.com",
	messagingSenderId: "681398514559",
	appId: "1:681398514559:web:e9e258473cb26fd350a04a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
