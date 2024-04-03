import React from 'react';
import Nav from './Components/Nav';
import Upload_table from './Components/Upload_table';

function App() {
  
  const [option, setOption] = React.useState(
    {
      upload_option: 'images',
      modifyManually: false,
    }

  );

  function handleOptionChange(e) {
    setOption({
      upload_option: e.target.value,
      modifyManually: false
    });

  }

  function handleModifyChange(e) {
    setOption({
      ...option,
      modifyManually: e.target.checked
    });

  }

  return (

    <div className='h-screen'>

      <div className='bg-slate-900 h-[10%]'>
        <Nav></Nav>
      </div>

      <div className="flex flex-row h-[90%]">

        <div className="basis-2/12 bg-neutral-700 h-full">

          <div className="grid grid-cols-1 place-items-center">

            <h2 className="block py-4 text-sm font-bold text-gray-900 dark:text-white">Tipo de cargue</h2>

            <select className="w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"

              id="upload_options"
              defaultValue={option.upload_option}
              onChange={handleOptionChange}>

              <option value="images">Imagenes</option>
              <option value="docs">Documentos Tecnicos</option>
              <option value="blueprints">Planos</option>
              <option value="rfa">Archivos RFA</option>
              <option value="prices">Precios</option>

            </select>

            <form>

              <input type="checkbox"
                id="modify_manually_checkbox"
                name="modify_manually_checkbox"
                key={option.upload_option}
                className="my-4"
                defaultChecked={option.modifyManually}
                onChange={handleModifyChange} />
              <label>Modificar Manualmente</label>
              <br></br>

            </form>

          </div>

        </div>

        <div className="basis-5/12 bg-indigo-900 h-full">

          <div className='p-4 h-full'>

            <Upload_table
            selected_option = {option.upload_option}
            modifyManually = {option.modifyManually}/>

          </div>

        </div>

        <div className="basis-5/12 bg-blue-900 h-full">
          b
        </div>
      </div>

    </div>
  );
}

export default App
