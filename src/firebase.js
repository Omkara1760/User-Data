import firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
      // add your firebase configuration
};

firebase.initializeApp(firebaseConfig);
var rf = firebase.database().ref();
export default rf;


