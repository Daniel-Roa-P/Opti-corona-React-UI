import React from 'react';
import Nav from '../Components/Nav';
import Upload_table from '../Components/Upload_table';
import Matrix_upload_table from '../Components/Matrix_upload_table';
import { UploadContext } from './UploadContext';
import Reports_component from '../Components/Reports_component';

function UploadPage(){

    const {

        tipoCargue,
        setTipoCargue,
        relaciones,
        setRelaciones,
        reporte,
        setReporte
    
      } = React.useContext(UploadContext)
    
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
    
      return (

        <div className='h-screen'>
    
          <div className='bg-slate-900 h-[10%]'>
            <Nav></Nav>
          </div>
    
          <div className="flex flex-row h-[90%]">
    
            <div className="w-[20%] bg-neutral-700 h-full">
    
              <div className="grid grid-cols-1 place-items-center h-1/6">
    
                <h2 className="block py-4 text-sm font-bold text-gray-900 dark:text-white">Tipo de cargue</h2>
    
                <select className="w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
    
                  defaultValue={tipoCargue.upload_option}
                  onChange={handleOptionChange}>
    
                  <option value="images">Imagenes</option>
                  <option value="docs">Documentos Tecnicos</option>
                  <option value="blueprints">Planos</option>
                  <option value="rfa">Archivos RFA</option>
                  <option value="prices">Precios</option>
                  <option value="videos">Videos</option>
    
                </select>
    
                <div>
    
                  <input type="checkbox"
                    id="modify_manually_checkbox"
                    name="modify_manually_checkbox"
                    key={tipoCargue.upload_option}
                    className="my-4"
                    defaultChecked={tipoCargue.modifyManually}
                    onChange={handleModifyChange} />
                  <label>Modificar Manualmente</label>
                  <br></br>
    
                </div>
    
              </div>
    
              <div className='w-full h-5/6 p-4'>
    
                <div className='h-[10%] w-full'>
                  <h2 className="block text-sm font-bold text-gray-900 dark:text-white w-full text-center">Reporte de matriz generada</h2>
                </div>
    
                <div className='h-[90%] w-full'>
    
                <div className="overflow-auto h-full w-full bg-slate-300">
    
                  <Reports_component
                    reporte = {reporte}
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

export {UploadPage};