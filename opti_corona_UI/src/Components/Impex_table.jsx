import React from 'react';
import { HotTable } from "@handsontable/react";
import { sendAttributesJson } from '../api/task.api';
import * as XLSX from "xlsx";

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

        let tempHeader = []
        let tempStructure = []

        for (let i = 0; i < selectedAttributes.length; i++) {

            if (selectedAttributes[i]['mode'] === '') {

                tempHeader.push(selectedAttributes[i]['attribute'])

            } else {

                tempHeader.push(selectedAttributes[i]['attribute'] + selectedAttributes[i]['mode'])

            }

            tempStructure.push(selectedAttributes[i]['attribute_structure'])

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

        let table_data = hotTableComponent.current.hotInstance.getData();

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

            objects_list.push({ properties: selectedAttributes[i], values: temp_column });

        }

        if (objects_list[0]['values'].includes(null)) {

            alert('Por favor ingrese siempre un SKU al inicio de las filas')

        } else {

            let references_assets_JSON = JSON.stringify(objects_list);
            let response = await sendAttributesJson(references_assets_JSON);

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

            <div className='h-[10%] flex w-full'>

                <label htmlFor="update_calc_sheet" className='text-center bg-gray-300 h-full text-md hover:bg-gray-500 w-full rounded-lg text-center cursor-pointer m-2 flex justify-center items-center'>Cargar valores desde hoja de calculo</label>
                <input id="update_calc_sheet" className='opacity-0 w-0' type="file" multiple={false} onClick={(event) => { event.target.value = '' }} onChange={(event) => {

                    let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
                    let selectedFile = event.target.files[0];

                    if (selectedFile && fileTypes.includes(selectedFile.type)) {

                        let reader = new FileReader();
                        reader.readAsArrayBuffer(selectedFile);

                        reader.onload = (e) => {

                            e.preventDefault();

                            const workbook = XLSX.read(e.target.result, { type: 'buffer' });
                            const worksheetName = workbook.SheetNames[0];
                            const worksheet = workbook.Sheets[worksheetName];
                            const data = XLSX.utils.sheet_to_json(worksheet);

                            let newAttributes = JSON.parse(JSON.stringify(attributes));

                            let highestLength = 0;

                            for (let i = 0; i < data.length; i++) {
                                let objLength = Object.keys(data[i]).length;
                                if (objLength > highestLength) {
                                    highestLength = objLength;
                                }
                            }

                            if (highestLength === header.length){

                                for (let i = 0; i < attributes.length; i++) {

                                    if ((data.length) > i) {
    
                                        newAttributes[i] = Object.values(data[i]);

                                    } 
    
                                }
    
                                setAtributes(newAttributes);    


                            } else {

                                alert('La cantidad atributos a actualizar no coincide con la cantidad de columnas de la hoja cargada, por favor haga el ajuste');

                            }

                        }

                    } else {

                        alert('Por favor seleccione un archivo valido');

                    }

                }} />

                <button className='text-center text-md bg-green-400 hover:bg-green-800 w-full h-full rounded-lg m-2' onClick={buttonClickCallback}>Generar impex</button>

            </div>

        </>

    )


}

export { Impex_table }