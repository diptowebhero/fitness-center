import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react"
import Swal from "sweetalert2";
import firebaseInitialization from "../Firebase/Firebase.init";
firebaseInitialization()
const useFirebase = () => {
    const [loding, setLoding] = useState(true)
    const [user, setUser] = useState({});
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    // clear error
    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 5000);
    }, [error]);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    //sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //signIn with Email Password
    const signInWithEmailPassword = () => {
     return  signInWithEmailAndPassword(auth, email, password)
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
    const getName = e => {
        setName(e?.target?.value)
    }
    //getEmail
    const getEmail = e => {
        setEmail(e?.target?.value)
    }
    //getPassword
    const getPassword = e => {
        setPassword(e?.target?.value)
    }
    //signup
    const handleRegister = () => {
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
            else {
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
        handleRegister,
        setUserInfo,
        setUser,
        setError,

    }
}
export default useFirebase;
