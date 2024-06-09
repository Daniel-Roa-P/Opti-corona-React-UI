import React from 'react';
import Nav from '../Components/Nav';
import { HotTable } from "@handsontable/react";
import { assets_structure } from "../assets_structure";
import { attributes_structure } from "../attributes_structure";

function UpdatePage() {

  const [atributes, setAtributes] = React.useState([]);
  const [header, setHeader] = React.useState([]);
  const [structure, setStructure] = React.useState([]);

  React.useEffect(() => {

    function getData() {

      let stringHeader = ""
      let structureList = []

      for (const property in attributes_structure) {

        stringHeader = stringHeader + attributes_structure[property]["header"]
        structureList.push(attributes_structure[property]["column_structure"])

      }

      setHeader(stringHeader.split(','))
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

        <div className="bg-neutral-700 h-[15%]">

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