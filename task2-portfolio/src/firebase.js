import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn5Xcvk6u1lQg0oFnvzBuQ6Iq9XnA1RwY",
  authDomain: "sujal-portfolio.firebaseapp.com",
  projectId: "sujal-portfolio",
  storageBucket: "sujal-portfolio.appspot.com",
  messagingSenderId: "961902960046",
  appId: "1:961902960046:web:b1802fd9006d9a75a7bc3f",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
