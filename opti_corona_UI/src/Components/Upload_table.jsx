import React from 'react';
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from 'handsontable/i18n';
import { sendAssetsJson } from '../api/task.api';
import "handsontable/dist/handsontable.full.css";
import { assets_structure } from "../assets_structure";
import * as XLSX from "xlsx";

registerAllModules();
registerLanguageDictionary(esMX);

Array.prototype.equals = function (array) {

    if (!array)
        return false;
    if(array === this)
        return true;
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
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

Object.defineProperty(Array.prototype, "equals", {enumerable: false});

const Upload_table = ({ selected_option, modifyManually, setRelaciones, setReporte }) => {

    const [referencias, setReferencias] = React.useState([]);
    const hotTableComponent = React.useRef(null);
    const [asociation, setAsociation] = React.useState('name');

    React.useEffect(() => {

        function getData() {

            const data = new Array(1000) 
                .fill()
                .map((_, row) => new Array(assets_structure[selected_option][modifyManually].header.length) // number of columns
                    .fill()
                    .map((_, column) => null)
                );

            setReferencias(data);
        }

        getData();

    }, [selected_option])

    function getCol(matrix, col) {
        var column = [];
        for (var i = 0; i < matrix.length; i++) {
            column.push(matrix[i][col]);
        }
        return column;
    }

    function removeNullValues(item) {

        // Recursively remove null values from nested arrays
        if (Array.isArray(item)) {
            const filteredArray = item
                .map((subItem) => removeNullValues(subItem))
                .flat(1)
                .filter((subItem) => 
                    subItem !== null && subItem !== undefined);
            return filteredArray.length > 0 ? filteredArray : null;
        } else {
            // Remove null values from non-array items
            return item !== null && item !== undefined ? [item] : [];
        }
    }

    const send_json = async () => {

        let n_columnas = assets_structure[selected_option][modifyManually].header.length;
        let table_data = hotTableComponent.current.hotInstance.getData()
        let empty_row = Array.from({length: n_columnas}, (_, index) => null)

        let filtered_table = table_data.filter(function (el) {
            if(!el.equals(empty_row)){
                return el
            }
          });

        let objects_list = []

        objects_list.push({'uploadType' : selected_option})

        for (let i = 0; i < n_columnas ; i++) {

            let temp_column = removeNullValues(getCol(filtered_table, i))

            if(temp_column === null){

                temp_column = []

            }

            const temp_object = {

                [assets_structure[selected_option][modifyManually].header[i]]: temp_column

            }

            objects_list.push(temp_object);

        }

        objects_list.push({'asociation': asociation})
        objects_list.push({'manual' : modifyManually})

        let references_assets_JSON = JSON.stringify(objects_list);
        
        let response = await sendAssetsJson(references_assets_JSON);

        setRelaciones(response.data[0])
        setReporte(response.data[1])

    }

    return (

        <>

            <div className='h-[10%] grid grid-cols-2 gap-8 place-content-center'>

                <div>

                    <label htmlFor="upload_filenames" className='bg-gray-300 h-auto text-md hover:bg-gray-500 w-full inline-block rounded-lg text-center cursor-pointer'>Leer desde carpeta<br></br>(asociación por nombre)</label>
                    <input id="upload_filenames" className='opacity-0' type="file" multiple onChange={(event) => {

                        const fileList = event.target.files;
                        const fileNames = Array.from(fileList).map((file) => {

                            return file.name;

                        })

                        //console.log(fileNames);
                        //console.log(referencias);

                        let newReferences = [...referencias]

                        for (let i = 0; i < referencias.length; i++) {

                            if ((fileNames.length) > i) {

                                newReferences[i][1] = fileNames[i];

                            } else {

                                newReferences[i][1] = null;

                            }

                        }

                        setReferencias(newReferences);
                        setAsociation('name')

                    }} />

                </div>

                <div>

                    <label htmlFor="upload_calc_sheet" className='bg-gray-300 h-auto text-md hover:bg-gray-500 w-full inline-block rounded-lg text-center cursor-pointer'>Leer desde hoja de calculo<br></br>(asociación por fila)</label>
                    <input id="upload_calc_sheet" className='opacity-0' type="file" multiple={false} onChange={(event) => {

                        let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
                        let selectedFile = event.target.files[0];
                        console.log(selectedFile.type)
                        if (selectedFile) {
                            console.log(selectedFile.type)
                            if (selectedFile && fileTypes.includes(selectedFile.type)) {

                                console.log(selectedFile.type)

                                let reader = new FileReader();
                                reader.readAsArrayBuffer(selectedFile);
                                reader.onload = (e) => {

                                    e.preventDefault();

                                    const workbook = XLSX.read(e.target.result, { type: 'buffer' });
                                    const worksheetName = workbook.SheetNames[0];
                                    const worksheet = workbook.Sheets[worksheetName];
                                    const data = XLSX.utils.sheet_to_json(worksheet);

                                    let newReferences = [...referencias]

                                    for (let i = 0; i < referencias.length; i++) {

                                        if ((data.length) > i) {

                                            newReferences[i][0] = data[i].SKU;
                                            newReferences[i][1] = data[i].NOMBRE_ARCHIVO;

                                        } else {

                                            newReferences[i][0] = null;
                                            newReferences[i][1] = null;

                                        }

                                    }

                                    setReferencias(newReferences);
                                    setAsociation('row')

                                }
                            }
                        }
                    }} />

                </div>

            </div>

            <div className='h-[80%] bg-[#f0f0f0]'>

                <HotTable
                    data={referencias}
                    colHeaders={assets_structure[selected_option][modifyManually].header}
                    columns={assets_structure[selected_option][modifyManually].column_structure}
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

                <button className='bg-green-400 w-full h-full rounded-lg hover:bg-green-800' onClick={send_json}>Generar Matriz de relacionamiento</button>

            </div>

        </>

    )

};

export default Upload_table;