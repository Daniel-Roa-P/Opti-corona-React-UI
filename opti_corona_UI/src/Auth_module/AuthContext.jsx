import React from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

import { loginUser, logoutUser } from '../api/task.api';

const AuthContext = React.createContext();

function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = React.useState(null);
    const [failedLogin, setFailedLogin] = React.useState(false);

    let usuarioValidado = null;
    const navigate = useNavigate();

    const getUser = async (email, password) => {

        console.log(email)
        console.log(password)

        /* {
            "password": "12345678",
            "last_login": null,
            "email": "patata@test1.com",
            "username": "test1"
        } */

        const response = await loginUser(
            {
                email: email,
                password: password
            }
        )

        console.log(response);

        if (response.status == 200) {

            setCurrentUser(response.data)
            return true

        } else {

            return false

        }

    };

    const login = async (data) => {

        usuarioValidado = await getUser(data.email, data.password);

        console.log(usuarioValidado)

        if (usuarioValidado) {

            setFailedLogin(false);
            navigate('/update');

        } else {

            setFailedLogin(true);
            navigate('/');

        };

    }

    const logout = async () => {

        const response = await logoutUser(
            {
                withCredentials: true
            }
        )

        setCurrentUser(null);
        navigate('/');

    }

    const auth = { currentUser, failedLogin, login, logout };

    return (

        <AuthContext.Provider value={auth}>

            {children}

        </AuthContext.Provider>

    );

}

function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

function AuthRoute({ children }) {

    const auth = useAuth();
    const { pathname } = useLocation();

    if (!auth.user) {

        return <Navigate to='/login' state={{ locationAfterLogin: pathname }} />;

    }

    return children;

}

export {
    AuthProvider,
    AuthRoute,
    useAuth
}