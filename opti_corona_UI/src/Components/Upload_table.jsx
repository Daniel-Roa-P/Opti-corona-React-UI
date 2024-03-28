import React from 'react';
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from 'handsontable/i18n';
import "handsontable/dist/handsontable.full.css";
import { assets_structure } from "../assets_structure";

registerAllModules();
registerLanguageDictionary(esMX);

const Upload_table = ({selected_option, modifyManually}) => {

    const [referencias, setReferencias] = React.useState([]);

    const hotTableComponent = React.useRef(null);

    React.useEffect(() => {

        function getData() {

            const data = new Array(2000) // number of rows
                .fill()
                .map((_, row) => new Array(assets_structure[selected_option].length) // number of columns
                    .fill()
                    .map((_, column) => "")
                );

            setReferencias(data);

        }

        getData();

    }, [selected_option])


    const descargarArchivo = () => {

        const pluginDescarga = hotTableComponent.current.hotInstance.getPlugin("exportFile");

        pluginDescarga.downloadFile("csv", { filename: "referencias", filrExtension: "csv", MimeType: "text/csv" })

    }

    return (

        <>

                <HotTable

                    data={referencias}
                    width="100%"
                    height="100%"
                    rowHeaders={true}
                    colHeaders={assets_structure[selected_option]}
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

        </>

    )

};

export default Upload_table;