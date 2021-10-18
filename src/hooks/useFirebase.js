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
    const [user, setUser] = useState([]);
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                window.location.reload()
            })
            .catch(error => {
                setError(error.message)
            })
    }
    //signIn with Email Password
    const signInWithEmailPassword = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result)
                alert('login successful')
                window.location.reload()
            })
            .catch(error => {
                setError(error.message)
            })
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
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserInfo()
                setUser(result.user)
                window.location.reload()
            })
            .catch(error => {
                setError(error.message)
            })
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
        signIn,
        setUserInfo

    }
}
export default useFirebase;
