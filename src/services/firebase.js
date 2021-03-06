import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC3zqw-3e6tawqxT9CdVF1S2Zea0-hv0qA",
  authDomain: "messanger-2076d.firebaseapp.com",
  databaseURL: "https://messanger-2076d-default-rtdb.firebaseio.com",
  projectId: "messanger-2076d",
  storageBucket: "messanger-2076d.appspot.com",
  messagingSenderId: "27123285768",
  appId: "1:27123285768:web:f11375ac472237e512f6bd",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
export const refMessages = db.ref("messages");
export const refChats = db.ref("chats");
