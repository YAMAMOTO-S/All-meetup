import firebase from 'firebase'
import firestore from 'firebase/firestore'


   var firebaseConfig = {
      apiKey: "AIzaSyCuK4BvHn0eIgIeRtH0FZSPFXcdTeBqhj0",
      authDomain: "fir-meetups.firebaseapp.com",
      databaseURL: "https://fir-meetups.firebaseio.com",
      projectId: "fir-meetups",
      storageBucket: "fir-meetups.appspot.com",
      messagingSenderId: "1018046392024",
      appId: "1:1018046392024:web:23516d1eba12cb548759ad",
      measurementId: "G-24P1W67S4H"
   };
const firebaseApp = firebase.initializeApp(firebaseConfig);
//export firebase database
export default firebaseApp.firestore()
firestore