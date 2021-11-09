import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDstsXlCrpJWYEGjsR40crD897xzBte0EE",
    authDomain: "financasapp-782d5.firebaseapp.com",
    projectId: "financasapp-782d5",
    storageBucket: "financasapp-782d5.appspot.com",
    messagingSenderId: "694285397157",
    appId: "1:694285397157:web:f66ecfbf24a35aa470714c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;