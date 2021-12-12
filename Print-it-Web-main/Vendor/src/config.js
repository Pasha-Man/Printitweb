import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDMPn4E4K8tlQJ8Ij9bEK4hvsHBuzRY3M",
  authDomain: "print-it-7f9da.firebaseapp.com",
  databaseURL: "https://print-it-7f9da-default-rtdb.firebaseio.com",
  projectId: "print-it-7f9da",
  storageBucket: "print-it-7f9da.appspot.com",
  messagingSenderId: "752634262586",
  appId: "1:752634262586:web:1dccfc310ef68e49be7103",
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore(); 
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebaseApp;
