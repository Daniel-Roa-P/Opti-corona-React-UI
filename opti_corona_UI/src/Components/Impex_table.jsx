import React from 'react';
import { HotTable } from "@handsontable/react";
import { attributes_structure } from "../attributes_structure";

function Impex_table({ selectedAttributes, impex, setImpex }) {

    const [attributes, setAtributes] = React.useState([]);
    const [header, setHeader] = React.useState([]);
    const [structure, setStructure] = React.useState([]);

    const hotTableComponent = React.useRef(null);

    const buttonClickCallback = () => {

        const hot = hotTableComponent.current.hotInstance;
        const exportPlugin = hot.getPlugin('exportFile');

        exportPlugin.downloadFile('csv', {
          bom: false,
          columnDelimiter: ';',
          columnHeaders: false,
          exportHiddenColumns: true,
          exportHiddenRows: true,
          fileExtension: 'csv',
          filename: 'IMPEX-co-es',
          mimeType: 'text/csv',
          rowDelimiter: '\r\n',
        });
      };

    React.useEffect(() => {

        hotTableComponent.current.hotInstance.updateData(attributes)

        let tempHeader = []
        let tempStructure = []

        for (let i = 0; i < selectedAttributes.length; i++) {

            tempHeader.push(selectedAttributes[i][Object.keys(selectedAttributes[i])[0]])
            tempStructure.push(attributes_structure[Object.keys(selectedAttributes[i])][selectedAttributes[i][Object.keys(selectedAttributes[i])[0]]])
        }

        setHeader(tempHeader);
        setStructure(tempStructure);

        function getData() {

            const data = new Array(1000) // number of rows
                .fill()
                .map((_, row) => new Array(header.length) // number of columns
                    .fill()
                    .map((_, column) => null)
                );

            setAtributes(data);
        }

        getData();

    }, [selectedAttributes])

    return (

        <>
            <div className='h-[90%] bg-[#f0f0f0]'>

                <HotTable
                    data={attributes}
                    colHeaders={header}
                    columns={structure}
                    width="100%"
                    height="100%"
                    ref={hotTableComponent}
                    rowHeaders={true}
                    colWidths={150}
                    manualRowMove={true}
                    autoWrapRow={true}
                    autoWrapCol={true}
                    licenseKey="non-commercial-and-evaluation"
                />

            </div>

            <div className='h-[10%] py-4'>

                <button className='text-center text-xl  bg-green-400 w-full h-full rounded-lg' onClick={buttonClickCallback}>Generar impex</button>

            </div>

        </>

    )


}

export { Impex_table }