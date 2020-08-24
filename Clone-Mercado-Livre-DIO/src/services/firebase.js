import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAUXS-V2EADyZD2THjZIokSpp_Vd6PkEEU",
    authDomain: "mercadolivreappdio.firebaseapp.com",
    databaseURL: "https://mercadolivreappdio.firebaseio.com",
    projectId: "mercadolivreappdio",
    storageBucket: "mercadolivreappdio.appspot.com",
    messagingSenderId: "1075347927647",
    appId: "1:1075347927647:web:76e218482bec4982e1a1ea"
  
};

firebase.initializeApp(firebaseConfig);

export default firebase;
