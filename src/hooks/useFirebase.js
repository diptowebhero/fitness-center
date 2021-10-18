import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useState,useEffect } from "react"
import firebaseInitialization from "../Firebase/Firebase.init";

firebaseInitialization()
const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState("")

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }
    //sign out
    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    //ovserverd
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return {
        signInWithGoogle,
        user,
        error,
        logOut

    }
}
export default useFirebase;
