import firebase from 'firebase'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyC6uUMSRkvlH_hPrqtnMej4gjEYzfTM_a4",
  authDomain: "alonandela-coda.firebaseapp.com",
  databaseURL: "https://alonandela-coda-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "alonandela-coda",
  storageBucket: "alonandela-coda.appspot.com",
  messagingSenderId: "202273557894",
  appId: "1:202273557894:web:6d5d72ee6e572eab17b007",
  measurementId: "G-1HQ3P5BJDM"
};
firebase.initializeApp(config)

export default firebase