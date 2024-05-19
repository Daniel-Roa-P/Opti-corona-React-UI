import React from 'react';
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from 'handsontable/i18n';
import { sendImagesJson } from '../api/task.api';
import "handsontable/dist/handsontable.full.css";
import { assets_structure } from "../assets_structure";
import * as XLSX from "xlsx";

registerAllModules();
registerLanguageDictionary(esMX);

const Matrix_upload_table = () => {

    const hotTableComponent = React.useRef(null);

    return (

        <>

            <div className='h-[10%] grid grid-cols-1 gap-8 place-content-center'>

                <div className='h-full text-center text-2xl text-white font-bold'>

                    Matriz de relacionamiento
                   
                </div>

            </div>

            <div className='h-[80%] bg-[#f0f0f0]'>

                <HotTable
                    data={[407971151,407971151,318004001,318004001,407918111,407918111,402911001,402911001,246021151,246021151,246021151,246021151,246021151,246021151,246021151,246021151,246021151,246021151,246021151,246021151,246021181,246021181,246021181,246021181,246021181,246021181,246021181,246021181,246021181,246021181,246021181,246021181,246021451,246021451,246021451,246021451,246021451,246021451,246021451,246021451,246021451,246021451,246021451,246021451,246021451,246021491,246021491,246021491,246021491,246021491,246021491,246021491,246021491,246021491,246021491,246021491,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031151,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247031761,247041101,247041101,247041101,247041101,247041101,247041101,247041101,247041101,247041101,247041101,247041101,247041101,247041101]}
                    colHeaders={assets_structure['images']['false'].header}
                    columns={assets_structure['images']['false'].column_structure}
                    ref={hotTableComponent}
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

                <button className='bg-green-500 w-full h-full rounded-lg'>Exportar Matriz de relacionamiento</button>

            </div>

        </>

    )

};

export default Matrix_upload_table;