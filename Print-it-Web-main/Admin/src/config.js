import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
console.log("object");

const firebaseConfig = {
  // apiKey: "AIzaSyDRvhzLWWuwqS0ewEuABRY8HWiAV2REY8s",
  // authDomain: "fuck-off-92924.firebaseapp.com",
  // projectId: "fuck-off-92924",
  // storageBucket: "fuck-off-92924.appspot.com",
  // messagingSenderId: "803906070596",
  // appId: "1:803906070596:web:d76daa0afd9290464ef411",
  // apiKey: "AIzaSyCDMPn4E4K8tlQJ8Ij9bEK4hvsHBuzRY3M",
  // authDomain: "print-it-7f9da.firebaseapp.com",
  // databaseURL: "https://print-it-7f9da-default-rtdb.firebaseio.com",
  // projectId: "print-it-7f9da",
  // storageBucket: "print-it-7f9da.appspot.com",
  // messagingSenderId: "752634262586",
  // appId: "1:752634262586:web:81d27b251ff86ff9be7103",
  // measurementId: "G-JX3BVMFJDC",

  // apiKey: "AIzaSyCDMPn4E4K8tlQJ8Ij9bEK4hvsHBuzRY3M",
  // authDomain: "print-it-7f9da.firebaseapp.com",
  // databaseURL: "https://print-it-7f9da-default-rtdb.firebaseio.com",
  // projectId: "print-it-7f9da",
  // storageBucket: "print-it-7f9da.appspot.com",
  // messagingSenderId: "752634262586",
  // appId: "1:752634262586:web:122299f5b71c792dbe7103",
  // measurementId: "G-XWTSC8BVXV",

  apiKey: "AIzaSyBoE21j3-o3eABr2iA3_CCwIC6YkXGzQDE",
  authDomain: "print-it-fd3f4.firebaseapp.com",
  databaseURL: "https://print-it-fd3f4-default-rtdb.firebaseio.com",
  projectId: "print-it-fd3f4",
  storageBucket: "print-it-fd3f4.appspot.com",
  messagingSenderId: "495542409688",
  appId: "1:495542409688:web:094e821277cc26019cfaad",
  measurementId: "G-9Z9BYF8927",
};
const application = firebase.initializeApp(firebaseConfig);
export const auth = application.auth();

export var db = application.firestore();
console.log(firebaseConfig);

export default application;
