import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCuU7qUEeLRQ7446nU-j7gsHCGDR4jbbgk",
  authDomain: "react-begin-ner.firebaseapp.com",
  databaseURL: "https://react-begin-ner.firebaseio.com",
  projectId: "react-begin-ner",
  storageBucket: "react-begin-ner.appspot.com",
  messagingSenderId: "203929965103",
  appId: "1:203929965103:web:02687fd8a49a8a9bd0acda",
  measurementId: "G-GK764FXNGL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
