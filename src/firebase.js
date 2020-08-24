import  firebase from "firebase" ;


const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyAu09hnlY42zP2ys21g4sfwEPtTqrY7vvg",
    authDomain: "instagram-clone-9ca1e.firebaseapp.com",
    databaseURL: "https://instagram-clone-9ca1e.firebaseio.com",
    projectId: "instagram-clone-9ca1e",
    storageBucket: "instagram-clone-9ca1e.appspot.com",
    messagingSenderId: "267569345850",
    appId: "1:267569345850:web:5f05b0035ae2c01f59cc03",
    measurementId: "G-C0ZDFZRCDK"
  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export{db,auth,storage};

