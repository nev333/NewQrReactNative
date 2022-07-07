import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAum9qF-FFisBA5pmejLCOw578reGqlBPQ",
  authDomain: "tool-qr-code-scanner.firebaseapp.com",
  projectId: "tool-qr-code-scanner",
  storageBucket: "tool-qr-code-scanner.appspot.com",
  messagingSenderId: "656173908993",
  appId: "1:656173908993:web:f37bca690e56512cb42c00",
  measurementId: "G-E4SZWVNFPN",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
