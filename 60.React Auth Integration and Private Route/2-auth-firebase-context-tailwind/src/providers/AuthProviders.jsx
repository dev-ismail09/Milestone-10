import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const GoogleSignUp = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // observe auth state change
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    } ,[])

    // authInfo er modde user akta Object
    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        logOut,
        GoogleSignUp
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;





































// import React, { createContext } from 'react';
// // 1. create context - and make sure export it
// export const AuthContext = createContext(null); 

// const AuthProviders = ({children}) => {

//     // 3. value makesure
//     const user = {displayName: "Ismail Hosen"}


//     return (
//         // 2. provider make
//         // 4. set value
//         <AuthContext.Provider value={user}>
//             {/* authprovide set children */}
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProviders;