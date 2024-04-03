import React from 'react';
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from 'handsontable/i18n';
import "handsontable/dist/handsontable.full.css";
import { assets_structure } from "../assets_structure";

registerAllModules();
registerLanguageDictionary(esMX);

const Upload_table = ({ selected_option, modifyManually }) => {

    const [referencias, setReferencias] = React.useState([]);

    const hotTableComponent = React.useRef(null);

    React.useEffect(() => {

        function getData() {

            const data = new Array(1000) // number of rows
                .fill()
                .map((_, row) => new Array(assets_structure[selected_option][modifyManually].header.length) // number of columns
                    .fill()
                    .map((_, column) => "")
                );

            console.log(data);

            setReferencias(data);
        }

        getData();

    }, [selected_option])

   /*  React.useEffect(() => {

        console.log('chupelo');

    }, [referencias]) */

    const descargarArchivo = () => {

        const pluginDescarga = hotTableComponent.current.hotInstance.getPlugin("exportFile");

        pluginDescarga.downloadFile("csv", { filename: "referencias", filrExtension: "csv", MimeType: "text/csv" })

    }

    return (

        <>

            <div className='h-[10%] grid grid-cols-2 gap-8 place-content-center'>

                <div>

                    <label htmlFor="upload_filenames" className='bg-gray-300 h-8 text-md hover:bg-gray-500 w-full inline-block rounded-lg text-center cursor-pointer'>Leer activos digitales desde carpeta</label>
                    <input id="upload_filenames" className='opacity-0' type="file" multiple onChange={(event) => {
                        
                        const fileList = event.target.files;
                        const fileNames = Array.from(fileList).map((file)=>{

                            return file.name;

                        })   

                        console.log(fileNames);
                        console.log(referencias);

                        let newReferences = [...referencias]

                        for(let i = 0; i<referencias.length; i++){

                            if ((fileNames.length)>i) {
                                
                                newReferences[i][1] = fileNames[i];
                            
                            } else {

                                newReferences[i][1] = "";

                            }
                            

                        }

                        setReferencias(newReferences);
                        console.log(referencias);

                    }} />

                </div>

                <div>

                    <label htmlFor="upload_calc_sheet" className='bg-gray-300 h-8 text-md hover:bg-gray-500 w-full inline-block rounded-lg text-center cursor-pointer'>Leer activos digitales desde hoja de calculo</label>
                    <input id="upload_calc_sheet" className='opacity-0' type="file" />

                </div>

            </div>

            <div className='h-[80%] bg-[#f0f0f0]'>

                <HotTable
                    data={referencias}
                    colHeaders={assets_structure[selected_option][modifyManually].header}
                    columns={assets_structure[selected_option][modifyManually].column_structure}
                    width="100%"
                    height="100%"
                    rowHeaders={true}
                    colWidths={150}
                    manualRowMove={true}
                    autoWrapRow={true}
                    autoWrapCol={true}
                    licenseKey="non-commercial-and-evaluation"
                >

                    {/* <HotColumn title="SKU" /> */}

                    {/*  {assets_structure[selected_option] !== undefined && assets_structure[selected_option].map(column => 
                    
                    <HotColumn 
                    key={column} 
                    title={column} />
                    
                    )} */}

                </HotTable>

            </div>

            <div className='h-[10%] p-4'>

                <button className='bg-green-500 w-full h-full rounded-lg'>Generar Matriz de relacionamiento</button>

            </div>

        </>

    )

};

export default Upload_table;