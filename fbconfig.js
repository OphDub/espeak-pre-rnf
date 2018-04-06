import * as firebase from 'firebase';
import keys from './keys.js';

const config = {
    apiKey: keys.firebase,
    authDomain: "espeak-53f28.firebaseapp.com",
    databaseURL: "https://espeak-53f28.firebaseio.com",
    projectId: "espeak-53f28",
    storageBucket: "espeak-53f28.appspot.com",
    messagingSenderId: "535165125077"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
