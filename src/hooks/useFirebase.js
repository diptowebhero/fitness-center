import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    GithubAuthProvider
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
    const gitHubProvider = new GithubAuthProvider()
    //sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //sign in with github
    const signInWithGithub = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    //signIn with Email Password
    const signInWithEmailPassword = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 2000
                })
                setError('')
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
    const handleRegister = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setUserInfo()
                setError('')
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Sign Up Successful',
                    showConfirmButton: false,
                    timer: 2000
                })
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
        signInWithGithub

    }
}
export default useFirebase;
