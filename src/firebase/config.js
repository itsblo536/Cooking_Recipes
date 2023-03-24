import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAADzFkcenhn9bnDDEU0a5GfHGQx-VXtFY",
  authDomain: "new-cooking-recipes-aafb8.firebaseapp.com",
  projectId: "new-cooking-recipes-aafb8",
  storageBucket: "new-cooking-recipes-aafb8.appspot.com",
  messagingSenderId: "557020446856",
  appId: "1:557020446856:web:05f26c980074132f849f3d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }