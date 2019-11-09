import firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDjp4jOJqNo7TnP0GotyEpMVzXNLxz2tdY",
  authDomain: "todo-list-88819.firebaseapp.com",
  databaseURL: "https://todo-list-88819.firebaseio.com",
  projectId: "todo-list-88819",
  storageBucket: "todo-list-88819.appspot.com",
  messagingSenderId: "580526683740",
  appId: "1:580526683740:web:15456cc1599cf134811899"
};

let db = null
if(!firebase.apps.length) {
  firebase.initializeApp(config);
  db = firebase.firestore();
} else {
  db = firebase.app()
}

export default db

// else {
//   // export default ;
// }
