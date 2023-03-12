import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBJQNN6aSh_1olXQTDNGcKd3RTiOyKTZDw',
  authDomain: 'codedoctormovieapp-1b16e.firebaseapp.com',
  databaseURL:
    'https://codedoctormovieapp-1b16e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'codedoctormovieapp-1b16e',
  storageBucket: 'codedoctormovieapp-1b16e.appspot.com',
  messagingSenderId: '692737413904',
  appId: '1:692737413904:web:6cb57c3135b70870becb95',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
