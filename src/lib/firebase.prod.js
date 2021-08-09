import Firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


// seed the database

//config
const config = {
    apiKey: "AIzaSyAiktDmIiB3bXTF7un1SlwinN4yVMuJ57w",
    authDomain: "netflix-ec86f.firebaseapp.com",
    projectId: "netflix-ec86f",
    storageBucket: "netflix-ec86f.appspot.com",
    messagingSenderId: "563665216286",
    appId: "1:563665216286:web:5a46d2ab8f0cf9dc951f0f"
};

const firebase = Firebase.initializeApp(config);



export {firebase};

