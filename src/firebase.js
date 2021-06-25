import firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyCY14K0_eZYsM02LGU0hJXFNtdoRwQ75Ng",
  authDomain: "user-details-e8fee.firebaseapp.com",
  projectId: "user-details-e8fee",
  storageBucket: "user-details-e8fee.appspot.com",
  messagingSenderId: "504625431993",
  appId: "1:504625431993:web:afebc220774686cc62a268",
};

firebase.initializeApp(firebaseConfig);
var rf = firebase.database().ref();
export default rf;


