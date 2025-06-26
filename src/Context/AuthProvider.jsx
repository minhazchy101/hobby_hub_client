import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

import React from 'react';
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({children}) => {

    const [loading , setLoading] = useState(true)
    const [user , setUser] = useState(null)

    const register = ( email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const login =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const google =(provider)=>{
        return signInWithPopup(auth , provider)
    }

    const logOut = () =>{
     return  signOut(auth)
    }
   
    const profile = (updateData)=>{
       return updateProfile( auth.currentUser , updateData)
    }
    

    const userInfo = {

       register,
       login,
       user ,
        setUser,
        profile,
        google,
       logOut,
       loading,
       setLoading
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;