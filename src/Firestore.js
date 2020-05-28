import firebase from "firebase";


var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: "kimiaportfolio-f9c8c",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
export default firebase;