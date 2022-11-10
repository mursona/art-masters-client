import React from 'react';
import { createContext } from 'react';
import {getAuth,createUserWithEmailAndPassword,updateProfile,onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth= getAuth(app);

const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const login=(email,password)=>{
        setLoading(true)
        
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
        
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
      }

    const logOut=()=>{
        localStorage.removeItem('Genius-token')
        return signOut(auth)
    }
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
         console.log(currentUser);
         setUser(currentUser)
         setLoading(false);
        });
 return ()=>{
    return unSubscribe();
 }
    },[])

    const authInfo ={user,loading,createUser,login,logOut,googleSignIn,updateUserProfile,setLoading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;