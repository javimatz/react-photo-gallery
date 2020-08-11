import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDm4iAqIuDzl9PNSjt0rTzBOZ5mVRZ-WaM",
	authDomain: "react-photo-gallery-fcabe.firebaseapp.com",
	databaseURL: "https://react-photo-gallery-fcabe.firebaseio.com",
	projectId: "react-photo-gallery-fcabe",
	storageBucket: "react-photo-gallery-fcabe.appspot.com",
	messagingSenderId: "786960654422",
	appId: "1:786960654422:web:cd2e075dc5d0c1f16a5bf7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Storage Service
const projectStorage = firebase.storage();
// Firebase Database
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };