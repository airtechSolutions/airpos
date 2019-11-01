import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAX-bx45QuqZmpr-ILhNQPx-TeGu56aVzQ",
    authDomain: "airpos-72966.firebaseapp.com",
    databaseURL: "https://airpos-72966.firebaseio.com",
    projectId: "airpos-72966",
    storageBucket: "airpos-72966.appspot.com",
    messagingSenderId: "542538899878",
    appId: "1:542538899878:web:0150bcdc41618d4de1af67",
    measurementId: "G-HBCEHH43MZ"
}

const fire = firebase.initializeApp(config);
export default fire;