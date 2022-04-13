import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey : "AIzaSyDusCc4VIW9UXWkBKUPHuf5ymIfi9l1LTQ" , 
  authDomain : "genius-car-services-c1544.firebaseapp.com" , 
  projectId : "genius-car-services-c1544" , 
  storageBucket : "genius-car-services-c1544.appspot.com" , 
  messagingSenderId : "947333454533" , 
  appId : "1:947333454533:web:63ff706f625cb935726eac" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
 