import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCM3RM1dJgeW1mW8ZlllJT79i_qFb3SI1o",
  authDomain: "emk-events.firebaseapp.com",
  databaseURL: "https://emk-events.firebaseio.com",
  projectId: "emk-events",
  storageBucket: "emk-events.appspot.com",
  messagingSenderId: "706728651318",
  appId: "1:706728651318:web:e466f1949610ebd3b4c697"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();