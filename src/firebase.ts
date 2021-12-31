import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyD40YOolMsgqEr6BSbwsTkJzs9i8eT-Ias",
    authDomain: "hageprosjekt-2d370.firebaseapp.com",
    projectId: "hageprosjekt-2d370",
    storageBucket: "hageprosjekt-2d370.appspot.com",
    messagingSenderId: "699937405345",
    appId: "1:699937405345:web:134f7bafa90f0189a473e0"
})

const firestore = firebase.app().firestore()
const auth = firebase.app().auth()

export {
    firestore, auth, firebase as default
}