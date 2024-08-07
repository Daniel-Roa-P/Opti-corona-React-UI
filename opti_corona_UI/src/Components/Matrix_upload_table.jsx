import React from 'react';
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from 'handsontable/i18n';
import "handsontable/dist/handsontable.full.css";
import { getAssetStructureJson } from '../api/task.api';

registerAllModules();
registerLanguageDictionary(esMX);

const Matrix_upload_table = ( { selected_option, relaciones, setRelaciones }) => {

    const hotTableComponent = React.useRef(null);
    const [assetStructure, setAssetStructure] = React.useState([]);

    React.useEffect(() => {

        hotTableComponent.current.hotInstance.updateData(relaciones)

    }, [relaciones])

    React.useEffect(() => {

        const getAssetStructure = async () => {
            
            const response = await getAssetStructureJson([selected_option,'true']);
            setRelaciones([])
            setAssetStructure(response.data);    
            hotTableComponent.current.hotInstance.updateData([])

        }
      
        getAssetStructure();

    }, [selected_option])

    const buttonClickCallback = () => {

        const hot = hotTableComponent.current.hotInstance;
        const hot_data = hotTableComponent.current.hotInstance.getData().length
        const exportPlugin = hot.getPlugin('exportFile');

        if(hot_data != 0){

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

        } else {

            alert('No se encontro una matriz generada');

        }

        
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
                    colHeaders={assetStructure.header}
                    columns={assetStructure.column_structure}
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

            <div className='h-[10%] py-2'>

                <button className='bg-green-400 w-full h-full rounded-lg hover:bg-green-800 text-sm' onClick={buttonClickCallback}>Exportar Matriz de relacionamiento</button>

            </div>

        </>

    )

};

export default Matrix_upload_table;