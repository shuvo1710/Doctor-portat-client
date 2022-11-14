import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  };

  const signInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      
    } )
    return ()=> unSubscribe()


  },[])

  const userInfo = {
    user,
    createUser,
    signInUser
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
