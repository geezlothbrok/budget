
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAm7C9KzLQMBHNNakwW2KVJysHAlm-OkEs",
  authDomain: "budget-app-a6d0e.firebaseapp.com",
  projectId: "budget-app-a6d0e",
  storageBucket: "budget-app-a6d0e.appspot.com",
  messagingSenderId: "70904696615",
  appId: "1:70904696615:web:292a3bb5e80c35e984a302"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;