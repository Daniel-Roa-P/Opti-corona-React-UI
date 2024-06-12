import React from 'react';
import Nav from '../Components/Nav';
import { attributes_structure } from "../attributes_structure";
import { Attributes_selection } from '../Components/Attributes_selection';
import { UpdateContext } from './UpdateContext';
import { Impex_table } from '../Components/Impex_table';

function UpdatePage() {

  const [option, setOption] = React.useState(Object.keys(attributes_structure)[0]);

  const {

    selectedAttributes,
    setSelectedAttributes,
    impex,
    setImpex,

  } = React.useContext(UpdateContext)

  function handleOptionChange(e) {
    
    setOption(e.target.value)

  }

  return (

    <div className='h-screen'>

      <div className='bg-slate-900 h-[10%]'>
        <Nav></Nav>
      </div>

      <div className="w-full h-[90%]">

        <div className="bg-neutral-700 h-[15%] flex">

          <div className='w-2/5 h-full'>

            <div className="grid grid-cols-1 place-content-center h-full px-8">

              <h2 className="block text-lg font-bold text-gray-900 dark:text-white">Catalogo de clasificación</h2>

              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                defaultValue={option}
                onChange={handleOptionChange}>

                {Object.keys(attributes_structure).map((clasification) => (

                  <option key={clasification} value={clasification}>{clasification}</option>

                ))}

              </select>

            </div>

          </div>

          <div className='w-3/5 h-full'>

              <Attributes_selection

                clasification = {option}
                options = {Object.keys(attributes_structure[option])}
                selectedAttributes = {selectedAttributes}
                setSelectedAttributes = {setSelectedAttributes}

              />  

          </div>

        </div>

        <div className="bg-blue-900 h-[85%] p-4">

            <Impex_table 
            selectedAttributes = {selectedAttributes}
            impex = {impex}
            setImpex = {setImpex}
            />

        </div>

      </div>
    </div>
  );

}

export { UpdatePage };