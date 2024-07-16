import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    const onUpload = () => {
        navigate( '/upload/' );
    }
    
    const onUpdate = () => {
        navigate( '/update/' );
    }

    return (

        <nav>

            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-2xl font-blod">Logo</span>
                </div>
                <div className="lg:flex md:flexlg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">

                        <ul className="flex gap-8 mr-16 text-[18px]">

                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                                <button onClick={onUpload}>Cargue</button></li>

                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                                <button onClick={onUpdate}>Actualización</button></li>
                                
                        </ul>

                    </div>
                </div>

            </div>

        </nav>

    )

};

export default Nav;