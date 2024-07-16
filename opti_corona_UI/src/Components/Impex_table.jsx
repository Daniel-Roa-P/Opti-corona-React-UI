import React from 'react';
import { HotTable } from "@handsontable/react";
import { sendAttributesJson, getAttributeStructureJson } from '../api/task.api';

Array.prototype.equals = function (array) {

    if (!array)
        return false;
    if (array === this)
        return true;
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }
    return true;
}

Object.defineProperty(Array.prototype, "equals", { enumerable: false });

function Impex_table({ selectedAttributes, impex, setImpex }) {

    const [attributes, setAtributes] = React.useState([]);
    const [header, setHeader] = React.useState([]);
    const [structure, setStructure] = React.useState([]);
    const hotTableComponent = React.useRef(null);

    function getCol(matrix, col) {
        var column = [];
        for (var i = 0; i < matrix.length; i++) {
            column.push(matrix[i][col]);
        }
        return column;
    }

    const saveData = (function () {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        return function (data, fileName) {
            const blob = new Blob([data], { type: "octet/stream" }),
                url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
        };
    }());

    React.useEffect(() => {

        hotTableComponent.current.hotInstance.updateData(attributes)

        let tempHeader = ['code', '$catalogversion']
        let tempStructure = [{
            "type": "text"
        }, {
            "type": "text"
        }]

        for (let i = 0; i < selectedAttributes.length; i++) {

            console.log(selectedAttributes[i])

            if(selectedAttributes[i]['mode'] === ''){

                tempHeader.push(Object.keys(selectedAttributes[i])[0])

            } else {

                tempHeader.push(Object.keys(selectedAttributes[i])[0] + ' - mode[' + selectedAttributes[i]['mode'] + ']' )

            }

            
            tempStructure.push(selectedAttributes[i][Object.keys(selectedAttributes[i])[0]]['attribute_structure'])

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

        if (attributes.length == 0) {

            getData();

        }

    }, [selectedAttributes])

    const buttonClickCallback = async () => {

        let table_data = hotTableComponent.current.hotInstance.getData()

        let empty_row = Array.from({ length: header.length }, (_, index) => null)

        let filtered_table = table_data.filter(function (el) {
            if (!el.equals(empty_row)) {
                return el
            }
        });

        let objects_list = []

        for (let i = 0; i < header.length; i++) {

            let temp_column = getCol(filtered_table, i)

            if (temp_column === null) {

                temp_column = []

            }

            const temp_object = {

                [header[i]]: temp_column

            }

            objects_list.push(temp_object);

        }

        if (objects_list[0]['code'].includes(null) || objects_list[0]['code'].includes('')){

            alert('Por favor ingrese siempre un SKU al inicio de las filas')

        } else {

            let references_assets_JSON = JSON.stringify(objects_list);
            let response = await sendAttributesJson(references_assets_JSON);
    
            console.log(response)
    
            saveData(response.data, "impex.csv");

        }

    };

    return (

        <>
            <div className='h-[90%] bg-[#f0f0f0]'>

                <HotTable
                    data={attributes}
                    colHeaders={header}
                    columns={structure}
                    hiddenColumns={{
                        columns: [1],
                        indicators: true,
                    }}
                    width="100%"
                    height="100%"
                    ref={hotTableComponent}
                    rowHeaders={true}
                    colWidths={250}
                    manualRowMove={true}
                    autoWrapRow={true}
                    autoWrapCol={true}
                    licenseKey="non-commercial-and-evaluation"
                />

            </div>

            <div className='h-[10%] pt-2'>

                <button className='text-center text-md bg-green-400 hover:bg-green-800 w-full h-full rounded-lg' onClick={buttonClickCallback}>Generar impex</button>

            </div>

        </>

    )


}

export { Impex_table }