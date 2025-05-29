import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config'
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);



const auth = getAuth(app);


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [justRegister, setJustRegister] = useState(false);
    const axiosPublic = useAxiosPublic();

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
        return signInWithPopup(auth, provider);

    };



    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                //get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // remove token (if token stored in the client side: local storage, caching, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);

        });

        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])



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