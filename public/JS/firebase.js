let firebaseConfig = {
    apiKey: "AIzaSyBB0RX7BzVq9tuXtwFaw5jrjZFe5Dqnp0o",
    authDomain: "blogging-website-2a5b5.firebaseapp.com",
    projectId: "blogging-website-2a5b5",
    storageBucket: "blogging-website-2a5b5.appspot.com",
    messagingSenderId: "65090907288",
    appId: "1:65090907288:web:decaecebdaa3ebd20df4ed"
  };


  const app = initializeApp(firebaseConfig);
 
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'YOUR_PROJECT_ID',
  keyFilename: '/path/to/keyfile.json',
});