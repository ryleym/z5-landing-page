import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBSydenrh2WzSwZKcERC3soKDv3Jq8TlzM",
    authDomain: "zero5-auth.firebaseapp.com",
    databaseURL: "https://zero5-auth.firebaseio.com",
    projectId: "zero5-auth",
    storageBucket: "zero5-auth.appspot.com",
    messagingSenderId: "337767095398"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;