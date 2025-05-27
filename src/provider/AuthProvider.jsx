import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config'
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);


const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [justRegister, setJustRegister] = useState(false);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const provider = new GoogleAuthProvider();
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user; 
                return user;
            })
            
    };



    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        });

        return () => {
            return unsubscribe();
        }
    }, [])



    const Info = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogIn,
        logOutUser,
        justRegister,
        setJustRegister,

    }





    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;