import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Auth_module/AuthContext";

const Nav = () => {

    const navigate = useNavigate();
    const auth = useAuth();

    const onUpload = () => {
        navigate('/upload/');
    }

    const onUpdate = () => {
        navigate('/update/');
    }

    const onLogout = () => {

        auth.logout();
    }

    return (

        <nav className='h-full'>

            <div className='flex h-full w-full text-white'>

                {auth.currentUser ? (

                    <>

                        <div className="flex items-center w-[70%] h-full">
                            <span className="text-2xl font-blod  ms-8">Opti corona</span>
                        </div>

                        <div className="flex items-center w-[10%] h-full">
                            <button className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-center w-full h-full" onClick={onUpload}>Cargue</button>
                        </div>

                        <div className="flex items-center w-[10%] h-full">
                            <button className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-center w-full h-full" onClick={onUpdate}>Actualización</button>
                        </div>

                        {<div className="flex items-center w-[10%] h-full">
                            <button className="hover:text-red-600 transition border-b-2 border-slate-900 hover:border-red-600 cursor-pointer text-center w-full h-full" onClick={onLogout}>Cerrar sesión</button>
                        </div>}

                    </>

                ) : (

                    <div className="flex items-center w-[100%] h-full">
                        <span className="text-2xl font-blod  ms-8">Opti corona</span>
                    </div>

                )}



            </div>

        </nav>

    )

};

export default Nav;