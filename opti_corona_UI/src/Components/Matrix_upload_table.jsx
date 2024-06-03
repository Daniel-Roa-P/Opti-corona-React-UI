import React from 'react';
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from 'handsontable/i18n';
import "handsontable/dist/handsontable.full.css";
import { assets_structure } from "../assets_structure";

registerAllModules();
registerLanguageDictionary(esMX);

const Matrix_upload_table = ( { selected_option, relaciones, setRelaciones }) => {

    const hotTableComponent = React.useRef(null);

    React.useEffect(() => {

        hotTableComponent.current.hotInstance.updateData(relaciones)
        let table_data = hotTableComponent.current.hotInstance.getData()

    }, [relaciones])

    const buttonClickCallback = () => {

        const hot = hotTableComponent.current.hotInstance;
        const exportPlugin = hot.getPlugin('exportFile');

        exportPlugin.downloadFile('csv', {
          bom: false,
          columnDelimiter: ',',
          columnHeaders: false,
          exportHiddenColumns: true,
          exportHiddenRows: true,
          fileExtension: 'csv',
          filename: selected_option + '-co-es',
          mimeType: 'text/csv',
          rowDelimiter: '\r\n',
        });
      };

    return (

        <>

            <div className='h-[10%] grid grid-cols-1 gap-8 place-content-center'>

                <div className='h-full text-center text-2xl text-white font-bold'>

                    Matriz de relacionamiento
                   
                </div>

            </div>

            <div className='h-[80%] bg-[#f0f0f0]'>

                <HotTable
                    data={relaciones}
                    colHeaders={assets_structure[selected_option]['true'].header}
                    columns={assets_structure[selected_option]['true'].column_structure}
                    ref={hotTableComponent}
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

            <div className='h-[10%] p-4'>

                <button className='bg-green-500 w-full h-full rounded-lg' onClick={buttonClickCallback}>Exportar Matriz de relacionamiento</button>

            </div>

        </>

    )

};

export default Matrix_upload_table;