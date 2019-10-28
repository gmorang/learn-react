import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyCm9Kzw47Xh-mYFXToezyCsBgdL3jOxJGY',
  authDomain: 'learn-react-d6266.firebaseapp.com',
  databaseURL: 'https://learn-react-d6266.firebaseio.com',
  projectId: 'learn-react-d6266',
  storageBucket: 'learn-react-d6266.appspot.com',
  messagingSenderId: '556401463612',
  appId: '1:556401463612:web:a383cef30a8eeec8f4ce39',
});

const firestore = firebase.firestore();
const storage = firebase.storage();

export {firebase, firestore, storage};
