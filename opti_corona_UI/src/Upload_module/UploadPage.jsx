import React from 'react';
import Nav from '../Components/Nav';
import Upload_table from '../Components/Upload_table';
import Matrix_upload_table from '../Components/Matrix_upload_table';
import { UploadContext } from './UploadContext';
import Reports_component from '../Components/Reports_component';
import { getAssetsListJson } from '../api/task.api';
import { useAuth } from "../Auth_module/AuthContext";
import { Navigate } from "react-router-dom";

function UploadPage() {

  const auth = useAuth();

  if (auth.currentUser === null) {

    return <Navigate to='/' replace />;

  }

  const {

    tipoCargue,
    setTipoCargue,
    relaciones,
    setRelaciones,
    reporte,
    setReporte

  } = React.useContext(UploadContext)

  const [assetsList, setAssetsList] = React.useState([])

  function handleOptionChange(e) {
    setTipoCargue({
      upload_option: e.target.value,
      modifyManually: false
    });

  }

  function handleModifyChange(e) {
    setTipoCargue({
      ...tipoCargue,
      modifyManually: e.target.checked
    });

  }

  React.useEffect(() => {

    const getAssetsList = async () => {
      const response = await getAssetsListJson([]);
      setAssetsList(response.data);
    }

    getAssetsList()

  }, [])

  return (

    <div className='h-screen'>

      <div className='bg-slate-900 h-[10%]'>
        <Nav></Nav>
      </div>

      <div className="flex flex-row h-[90%]">

        <div className="w-[20%] bg-neutral-700 h-full">

          <div className="flex flex-col h-1/6">

            <div className='h-2/4 flex items-center'>
              <p className="text-center font-bold text-sm text-gray-900 dark:text-white w-full">Tipo de cargue</p>
            </div>

            <div className='h-2/4 flex items-center'>

              <select className="mx-[10%] w-[80%] h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"

                defaultValue={tipoCargue.upload_option}
                onChange={handleOptionChange}>

                {assetsList.map((option) => (

                  <option key={option} value={option}>{option}</option>

                ))}

              </select>

            </div>

            {/* <div className='h-1/4 text-sm flex items-center'>

              <input type="checkbox"
                id="modify_manually_checkbox"
                name="modify_manually_checkbox"
                className='w-[30%]'
                key={tipoCargue.upload_option}
                defaultChecked={tipoCargue.modifyManually}
                onChange={handleModifyChange} />
              <label className='w-[70%] text-start'>Modificar Manualmente</label>
              <br></br>

            </div> */}

          </div>

          <div className='w-full h-5/6 p-4'>

            <div className='h-[10%] flex items-center'>
              <h2 className="block text-sm font-bold text-gray-900 dark:text-white w-full text-center">Reporte de matriz generada</h2>
            </div>

            <div className='h-[90%] w-full'>

              <div className="overflow-auto h-full w-full bg-slate-300">

                <Reports_component
                  reporte={reporte}
                />

              </div>

            </div>

          </div>

        </div>

        <div className="w-[40%] bg-indigo-900 h-full">

          <div className='p-4 h-full'>

            <Upload_table
              selected_option={tipoCargue.upload_option}
              modifyManually={tipoCargue.modifyManually}
              setRelaciones={setRelaciones}
              setReporte={setReporte}
            />

          </div>

        </div>

        <div className="w-[40%] bg-blue-900 h-full">

          <div className='p-4 h-full'>

            <Matrix_upload_table
              selected_option={tipoCargue.upload_option}
              relaciones={relaciones}
              setRelaciones={setRelaciones} />

          </div>

        </div>

      </div>

    </div>
  );

}

export { UploadPage };