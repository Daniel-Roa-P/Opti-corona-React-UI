import React from 'react';
import Nav from '../Components/Nav';
import { HotTable } from "@handsontable/react";
import { attributes_structure } from "../attributes_structure";
import { Attributes_selection } from '../Components/Attributes_selection';

function UpdatePage() {

  const [atributes, setAtributes] = React.useState([]);
  const [header, setHeader] = React.useState([]);
  const [structure, setStructure] = React.useState([]);
  const [option, setOption] = React.useState(Object.keys(attributes_structure)[0]);

  function handleOptionChange(e) {
    
    setOption(e.target.value)

  }

  React.useEffect(() => {

    function getData() {

      let stringHeader = []
      let structureList = []

      for (const property in attributes_structure) {

        stringHeader.push(attributes_structure[property]["header"])
        structureList.push(attributes_structure[property]["column_structure"])

      }

      setHeader(stringHeader.flat(1))
      setStructure(structureList.flat(1))
      const data = new Array(1000) // number of rows
        .fill()
        .map((_, row) => new Array(header.length) // number of columns
          .fill()
          .map((_, column) => null)
        );

      setAtributes(data);
    }

    getData();

  }, [])

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

                {Object.keys(attributes_structure).map((option) => (

                  <option key={option} value={option}>{option}</option>

                ))}

              </select>

            </div>

          </div>

          <div className='w-3/5 h-full'>

              <Attributes_selection

                options={attributes_structure[option]["header"]}

              />

          </div>

        </div>

        <div className="bg-blue-900 h-[90%] p-4">

          <div className='h-[80%] bg-[#f0f0f0]'>

            <HotTable
              data={atributes}
              colHeaders={header}
              columns={structure}
              width="100%"
              height="100%"
              rowHeaders={true}
              colWidths={150}
              manualRowMove={true}
              autoWrapRow={true}
              autoWrapCol={true}
              licenseKey="non-commercial-and-evaluation"
            />

          </div>

        </div>

      </div>
    </div>
  );

}

export { UpdatePage };