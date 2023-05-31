import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)





    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true)
    }


    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true);
    }


    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user'. currentUser);


            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data)
                        localStorage.setItem('access-token', data.data);
                        setLoading(false)

                    })

            }

            else {
                localStorage.removeItem('access-token')
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])



    const authInformation = {
        user,
        loading,
        createUser,
        logInUser,
        googleLogin,
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;