import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCQhjgNheeYmynWpfIS7gL6IQUTUTCR7VI",
    authDomain: "test-lanacion-3a57b.firebaseapp.com",
    databaseURL: "https://test-lanacion-3a57b.firebaseio.com",
    projectId: "test-lanacion-3a57b",
    storageBucket: "test-lanacion-3a57b.appspot.com",
    messagingSenderId: "291796130526",
    appId: "1:291796130526:web:1092f04ff7e0fbd2"
};

const auth = firebase.initializeApp(config);





export default auth;
export { config };