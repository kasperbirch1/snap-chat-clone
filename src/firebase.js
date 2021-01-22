import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrOhc6ZabhaiJKm6RMD9ul4EzYnLORLQI",
  authDomain: "snapchat-clone-e38e2.firebaseapp.com",
  projectId: "snapchat-clone-e38e2",
  storageBucket: "snapchat-clone-e38e2.appspot.com",
  messagingSenderId: "554664980428",
  appId: "1:554664980428:web:e515d74bf86fd90d53b769",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
