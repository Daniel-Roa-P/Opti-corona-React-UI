import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    const onUpload = () => {
        navigate('/upload/');
    }

    const onUpdate = () => {
        navigate('/update/');
    }

    return (

        <nav className='h-full'>

            <div className='flex h-full w-full text-white'>

                <div className="flex items-center w-[80%] h-full">
                    <span className="text-2xl font-blod  ms-8">Logo</span>
                </div>

                <div className="flex items-center w-[10%] h-full">
                    <button className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-center w-full h-full" onClick={onUpload}>Cargue</button>
                </div>

                <div className="flex items-center w-[10%] h-full">
                    <button className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer text-center w-full h-full" onClick={onUpdate}>Actualización</button>
                </div>

            </div>

        </nav>

    )

};

export default Nav;