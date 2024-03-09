import React from 'react';
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from 'handsontable/i18n';
import "handsontable/dist/handsontable.full.css"
import Nav from './Components/Nav';

registerAllModules();
registerLanguageDictionary(esMX);


function App() {

  const [usuarios, setUsuarios] = React.useState([]);
  const hotTableComponent = React.useRef(null);

  const descargarArchivo = () => {

    const pluginDescarga = hotTableComponent.current.hotInstance.getPlugin("exportFile");

    pluginDescarga.downloadFile("csv", { filename: "usuarios", filrExtension: "csv", MimeType: "text/csv" })

  }

  React.useEffect(() => {

    function getData() {

      const data = new Array(200) // number of rows
        .fill()
        .map((_, row) => new Array(6) // number of columns
          .fill()
          .map((_, column) => "")
        );

      setUsuarios(data);

    }

    getData();

  }, [])

  return (

    <div className='h-screen'>

      <div className='bg-slate-900 h-[10%]'>
        <Nav></Nav>
      </div>

      <div class="flex flex-row h-[90%]">

        <div class="basis-2/12 bg-orange-600 h-full">

          <div class="grid grid-cols-1 place-items-center">

            <h2 class="block py-4 text-sm font-bold text-gray-900 dark:text-white">Tipo de cargue</h2>

            <select class="w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" id="upload_options">
              <option selected value="-">---</option>
              <option value="images">Imagenes</option>
              <option value="docs">Documentos Tecnicos</option>
              <option value="blueprints">Planos</option>
              <option value="rfa">Archivos RFA</option>
              <option value="prices">Precios</option>
            </select>

          </div>

        </div>

        <div class="basis-5/12 bg-orange-300 h-full">

          <div>

            <button onClick={() => { console.table(usuarios) }}> show state </button>
            <button onClick={() => { descargarArchivo() }}> descargar archivo </button>

            {usuarios &&

              <HotTable

                /* ref = {hotTableComponent}
                language = {esMX.languageCode} 
                data = {usuarios}
                licenseKey = 'non-commercial-and-evaluation'
                colHeaders = {true} 
                rowHeaders = {true}
                columnSorting = {true}
                contextMenu = {true} */

                data={usuarios}
                width={320}
                height={320}
                rowHeaders={true}
                colHeaders={true}
                colWidths={100}
                manualRowMove={true}
                autoWrapRow={true}
                autoWrapCol={true}
                licenseKey="non-commercial-and-evaluation"

              >

              </HotTable>

            }

          </div>

        </div>

        <div class="basis-5/12 bg-orange-900 h-full">
          b
        </div>
      </div>

    </div>
  );
}

export default App
