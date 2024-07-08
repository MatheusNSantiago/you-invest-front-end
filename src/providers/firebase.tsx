import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";


type FirebaseProviderProps = {
  children: React.ReactNode;
};
export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const config = {
    apiKey: "AIzaSyCzXC50zCURWYdb-XwhWziV8VaHcA5bzIs",
    authDomain: "you-invest-f41b1.firebaseapp.com",
    projectId: "you-invest-f41b1",
    storageBucket: "you-invest-f41b1.appspot.com",
    messagingSenderId: "58552481410",
    appId: "1:58552481410:web:babd66b898ca8b80a9269b",
  };



  const app = initializeApp(config);
  connectAuthEmulator(getAuth(app), "http://127.0.0.1:9099", { disableWarnings: true });
  connectFirestoreEmulator(getFirestore(app), '127.0.0.1', 8080);

  return children;
};
