import firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCqA2YaDWw_1fa2dxmLjEdWbA54UyAogfc",

    authDomain: "auth-production-4375f.firebaseapp.com",

    projectId: "auth-production-4375f",

    storageBucket: "auth-production-4375f.appspot.com",

    messagingSenderId: "678801410813",

    appId: "1:678801410813:web:d7b385aaa5e5580c160c94"

})

export const auth = app.auth();
export default app