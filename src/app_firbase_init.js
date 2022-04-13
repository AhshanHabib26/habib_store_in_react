import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVKdDYQ44s_bPzNrY8eSA59fszkCpoTq4",
  authDomain: "habib-store-f7d43.firebaseapp.com",
  projectId: "habib-store-f7d43",
  storageBucket: "habib-store-f7d43.appspot.com",
  messagingSenderId: "135925739371",
  appId: "1:135925739371:web:5e9a7749612a581045262e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;