import * as firebase from 'firebase/app';
// eslint-disable-next-line
import firestore from 'firebase/firestore'
// eslint-disable-next-line
import auth from 'firebase/auth'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDhz2GDZogRzn4EPLrL4J67M4YxEV2PGBo",
  authDomain: "mf-jdsr.firebaseapp.com",
  databaseURL: "https://mf-jdsr.firebaseio.com",
  projectId: "mf-jdsr",
  storageBucket: "mf-jdsr.appspot.com",
  messagingSenderId: "33704575511"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;