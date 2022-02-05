import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCX7vUf9czDTG1FCh5bmxQTio1Tm0qLXq0",
  authDomain: "react-project-de4a3.firebaseapp.com",
  databaseURL: "https://react-project-de4a3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-project-de4a3",
  storageBucket: "react-project-de4a3.appspot.com",
  messagingSenderId: "976797829604",
  appId: "1:976797829604:web:3cdb2f4a088d5eee181ff1"
};

export const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);
export const auth=getAuth();
