import PropTypes from "prop-types";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const authInfo = { user, createUser, signInUser };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};

/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the auth provider in the main.jsx file
 * 4.access children in the authProvider component as children and use it in the middle of the provider
 *
 *
 *   */
