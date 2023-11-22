import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDpoMDbcYX531Ib04GbNu-E23fyygySVy8",
  authDomain: "ecommerce-9c7e6.firebaseapp.com",
  projectId: "ecommerce-9c7e6",
  storageBucket: "ecommerce-9c7e6.appspot.com",
  messagingSenderId: "125971693045",
  appId: "1:125971693045:web:1acbeb059ff958db4c74bc"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app , "gs://ecommerce-9c7e6.appspot.com");
