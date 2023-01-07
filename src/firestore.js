import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//const { applicationDefault, cert } = 'firebase-admin/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0V9tDDVWYkETW8mwxwsre_4eQoedynSY",
  authDomain: "pokegroups-8981c.firebaseapp.com",
  projectId: "pokegroups-8981c",
  storageBucket: "pokegroups-8981c.appspot.com",
  messagingSenderId: "665306192971",
  appId: "1:665306192971:web:88bfe740613f950c7581ce",
  measurementId: "G-CTK0PTT8KB", //optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
