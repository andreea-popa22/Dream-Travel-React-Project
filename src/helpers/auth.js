import {auth,database} from '../services/firebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { ref, set } from "firebase/database";

export function signup(email, password, age, name) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user ={
                uid:userCredential.user.uid,
                email:email,
                name:name,
                age:age
            };
            const x=ref(database, "users/" + user.uid)
           set(ref(database, "users/" + user.uid), {
               email: email,
               name: name,
               age: age
           }). then(r =>console.log(database))
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export function logout() {
    return auth.signOut()
}