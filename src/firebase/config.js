import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBe6g-KF4lkLDOHmwQyZ80w2nXiALCK4Qg',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'insuranceapp-d13c9.firebaseapp.com',
  projectId: 'insuranceapp-d13c9',
  storageBucket: 'insuranceapp-d13c9.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
