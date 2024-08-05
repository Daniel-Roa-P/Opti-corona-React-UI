import React from 'react';
import Nav from '../Components/Nav';
import { useAuth } from "./AuthContext";
import { useLocation, Navigate } from "react-router-dom";

function LoginPage() {

    const auth = useAuth();
    const location = useLocation();
    const [data, setData] = React.useState({ username: (location.state !== null) ? location.state.username : '', password: (location.state !== null) ? location.state.password : '' });
    if (auth.currentUser !== null) {

        const hasPreviousPage = window.history.length > 1;

        if (hasPreviousPage) {
            return <Navigate to='/upload' replace/>;
        }

    }

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {

        e.preventDefault();
        auth.login(data);

    };

    return (

        <div className='h-screen'>

            <div className='bg-slate-900 h-[10%]'>
                <Nav></Nav>
            </div>

            <section className="bg-gray-50 dark:bg-gray-900 h-[90%]">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Accede a tu cuenta
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={login}>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese su nombre de usuario</label>
                                    <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required=""
                                        onChange={updateData}
                                        value={data.username} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                        onChange={updateData}
                                        value={data.password} />
                                </div>

                                {(auth.failedLogin) && (

                                    <div>
                                        <label className="block text-center mb-2 text-sm font-medium bg-red-900 text-white-900 dark:text-white">Usuario o contraseña erroneo.</label>
                                    </div>

                                )}

                                <button type="submit" className="w-full text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );

}

export { LoginPage };