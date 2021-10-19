import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { useState, useEffect } from "react"
import firebaseInitialization from "../Firebase/Firebase.init";

firebaseInitialization()
const useFirebase = () => {
    const [loding, setLoding] = useState(true)
    const [user, setUser] = useState([]);
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //signIn with Email Password
    const signInWithEmailPassword = (e) => {
        e.preventDefault();
      return signInWithEmailAndPassword(auth, email, password)
    }
    //update user profile
    const setUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => { })
            .catch((error) => {
                setError(error.message)
            });
    }
    //getName
    const getName = (e) => {
        setName(e?.target?.value)
    }
    //getEmail
    const getEmail = (e) => {
        setEmail(e?.target?.value)
    }
    //getPassword
    const getPassword = (e) => {
        setPassword(e?.target?.value)
    }
    //signup
    const signIn = (e) => {
        e.preventDefault();
     return  createUserWithEmailAndPassword(auth, email, password)
    }
    //sign out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
    }
    //ovserverd
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setLoding(false)
        })
    }, [])
    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        signInWithEmailPassword,
        getEmail,
        getPassword,
        getName,
        loding,
        signIn,
        setUserInfo,
        setUser,
        setError

    }
}
export default useFirebase;
