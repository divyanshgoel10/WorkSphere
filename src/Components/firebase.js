import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVuGb5DAVJMW8og-tmc0iOJyRMgkqrayo",
    authDomain: "linkedin-clone-2-e900a.firebaseapp.com",
    projectId: "linkedin-clone-2-e900a",
    storageBucket: "linkedin-clone-2-e900a.appspot.com",
    messagingSenderId: "432937306360",
    appId: "1:432937306360:web:c6f1d71fdab26ecc9f130d"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

export { db, auth };
