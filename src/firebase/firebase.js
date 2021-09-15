import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBC5fucmRHul0eo35rCpQ4Ro1r_Fcg0fhk",
  authDomain: "news-app-589dd.firebaseapp.com",
  databaseURL: "https://news-app-589dd-default-rtdb.firebaseio.com",
  projectId: "news-app-589dd",
  storageBucket: "news-app-589dd.appspot.com",
  messagingSenderId: "284054322654",
  appId: "1:284054322654:web:4c855b64acab40ef5df14f",
});

export const db = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export default app;
