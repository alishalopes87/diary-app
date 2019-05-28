import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBVSWO-mgkvakLZAM07GNYxP3fDPsCk7Fs",
      authDomain: "diary-6e9d6.firebaseapp.com",
      databaseURL: "https://diary-6e9d6.firebaseio.com",
      projectId: "diary-6e9d6",
      storageBucket: "diary-6e9d6.appspot.com",
      messagingSenderId: "691150102131",
      appId: "1:691150102131:web:6d1353ef51e19c93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.firestore().settings({ timestampsInSnapshots: true })
  
  export default firebase
  export { db }