import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBLT01BgAX-MQgExVJS-5ura3GAvSqITg8",
  authDomain: "twitter-bd30f.firebaseapp.com",
  projectId: "twitter-bd30f",
  storageBucket: "twitter-bd30f.appspot.com",
  messagingSenderId: "384446723627",
  appId: "1:384446723627:web:9d168ed9e693b8108edc6e"
};
firebase.initializeApp(firebaseConfig);

export default firebase;