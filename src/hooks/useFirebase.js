import { useEffect, useState } from "react"
import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);

    }

    //Observe whether user auth state has changed or not
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(false)
        return signOut(auth)
    }

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const setUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })

    }

    const manualSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }




    return {
        user,
        error,
        setError,
        signInUsingGoogle,
        createNewUser,
        setUserName,
        manualSignIn,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;