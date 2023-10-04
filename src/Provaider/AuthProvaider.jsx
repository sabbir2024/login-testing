import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../__Firebase/___Firebase';




export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);
    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        setLoding(true);
    }

    const signInGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        setLoding(true);
    }

    const logOut = () => {
        setLoding(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubcriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoding(false);
            console.log('observerb current user', currentUser)
        });
        return () => {
            unSubcriber();
        }
    }, [])



    const authInfo = {
        user,
        loding,
        createUser,
        SignInUser,
        logOut,
        signInGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};
