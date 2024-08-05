import React from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

import { loginUser } from '../api/task.api';

const AuthContext = React.createContext();

function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = React.useState(null);
    const [failedLogin, setFailedLogin] = React.useState(false);

    let usuarioValidado = null;
    const navigate = useNavigate();

    const getUser = async (username, password) => {

        /* {
            "email": "patata@test.com",
            "username": "test1",
            "password": "12345678"
        } */

        const response = await loginUser(
            {
                username: username,
                password: password
            }
        )



        if (response.status == 200) {

            setCurrentUser(response.data)
            return true

        } else {

            return false

        }

    };

    const login = async (data) => {

        //usuarioValidado = await getUser(data.username, data.password);

        /* console.log(usuarioValidado)

        if (usuarioValidado) {

            setFailedLogin(false);
            navigate('/upload');

        } else {

            setFailedLogin(true);
            navigate('/');

        }; */

        try {

            const response = await loginUser(
                {
                    username: data.username,
                    password: data.password
                }
            )

            setCurrentUser(response.data)
            setFailedLogin(false);
            navigate('/upload');

        } catch (error) {
            
            console.log('There was an error', error);

            setFailedLogin(true);
            navigate('/');

        }



    }

    const logout = async () => {

        /* const response = await logoutUser(
            {
                withCredentials: true
            }
        ) */

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