import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const dbURL = process.env.DB_CONNECTION_URL

const firebaseConfig = {

    apiKey: "AIzaSyDGgTNd7hLe-816Cdy_tSPTyTLydGFYBTs",
    authDomain: "noventiq-exercise-db.firebaseapp.com",
    projectId: "noventiq-exercise-db",
    storageBucket: "noventiq-exercise-db.appspot.com",
    messagingSenderId: "391159275978",
    appId: "1:391159275978:web:f057e4c7968cb6d995ef33",
    //databaseURL: dbURL
    databaseURL: "https://noventiq-exercise-db-default-rtdb.asia-southeast1.firebasedatabase.app/"

};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);