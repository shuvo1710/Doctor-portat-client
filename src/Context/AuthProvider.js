import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loader,setLoader] = useState(true)


  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
  };

  const signInUser = (email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUser =(userInfo)=>{
    setLoader(true)
    return updateProfile(auth.currentUser, userInfo)

  }

  const logOut=()=>{
    setLoader(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoader(false)
      
    } )
    return ()=> unSubscribe()


  },[])

  const authInfo = {
    user,
    loader,
    createUser,
    signInUser,
    logOut,
    updateUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
