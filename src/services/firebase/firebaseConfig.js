import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCCjb-iFdWbikEuyujhBCSimKpf9y7_R0U",
    authDomain: "florderaiz-reactjs.firebaseapp.com",
    projectId: "florderaiz-reactjs",
    storageBucket: "florderaiz-reactjs.appspot.com",
    messagingSenderId: "443478590001",
    appId: "1:443478590001:web:30a4ddec40476c4dca4b10",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);