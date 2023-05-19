import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyCCjb-iFdWbikEuyujhBCSimKpf9y7_R0U",
    authDomain: "florderaiz-reactjs.firebaseapp.com",
    projectId: "florderaiz-reactjs",
    storageBucket: "florderaiz-reactjs.appspot.com",
    messagingSenderId: "443478590001",
    appId: "1:443478590001:web:30a4ddec40476c4dca4b10",
};

const app = initializeApp(firebaseConfig);
const fireStoreDb = getFirestore(app);
export default fireStoreDb;

// Obtengo todos los items de la DB

export async function getAllItems() {
    const miColec = collection(fireStoreDb, 'items');
    const itemsSnapshot = await getDocs(miColec);

    return itemsSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
};

export async function getItemsByCategory(category) {
    const miColec = collection(fireStoreDb, 'items');
    const queryItem = query(miColec, where("category", '==', category));
    const itemSnapshot = await getDocs(queryItem);

    return itemSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }

    })
};

export async function getItem(id) {
    const miColec = collection(fireStoreDb, 'items');
    const itemRef = doc(miColec, id);
    const itemSnapshot = await getDoc(itemRef);


    return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
    }

};

export async function createBuyOrder(orderData) {
    const buyTimeStamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date: buyTimeStamp
    };
    const miColec = collection(fireStoreDb, 'buyOrders');
    const orderDoc = await addDoc(miColec, orderWithDate);
    console.log("Orden lista con el id ", orderDoc.id);
    return orderDoc.id;
}