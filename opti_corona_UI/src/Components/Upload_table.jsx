import React from 'react';
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from 'handsontable/i18n';
import { sendAssetsJson, getAssetStructureJson } from '../api/task.api';
import "handsontable/dist/handsontable.full.css";
import * as XLSX from "xlsx";

registerAllModules();
registerLanguageDictionary(esMX);

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

const Upload_table = ({ selected_option, modifyManually, setRelaciones, setReporte }) => {

    const [referencias, setReferencias] = React.useState([]);
    const hotTableComponent = React.useRef(null);
    const [asociation, setAsociation] = React.useState('row');
    const [assetStructure, setAssetStructure] = React.useState([]);

    React.useEffect(() => {

        const getAssetStructure = async () => {

            const response = await getAssetStructureJson([selected_option, modifyManually]);

            const data = new Array(5000)
                .fill()
                .map((_, row) => new Array(response.data.header.length) // number of columns
                    .fill()
                    .map((_, column) => null)
                );

            setAssetStructure(response.data);
            setReferencias(data);

        }

        getAssetStructure();

    }, [selected_option, modifyManually])

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

        let n_columnas = assetStructure.header.length;
        let table_data = hotTableComponent.current.hotInstance.getData()
        let empty_row = Array.from({ length: n_columnas }, (_, index) => null)

        let filtered_table = table_data.filter(function (el) {
            if (!el.equals(empty_row)) {
                return el
            }
        });

        let objects_list = []
        let columns_sizes = []

        objects_list.push({ 'uploadType': selected_option })

        for (let i = 0; i < n_columnas; i++) {

            let temp_column = []

            if (modifyManually) {

                temp_column = getCol(filtered_table, i)

            } else {

                temp_column = removeNullValues(getCol(filtered_table, i))

                if (temp_column === null) {

                    temp_column = []

                }

            }

            const temp_object = {

                [assetStructure.header[i]]: temp_column

            }

            columns_sizes.push(temp_column.length);
            objects_list.push(temp_object);

        }

        if (((columns_sizes[0] == 0 || columns_sizes[1] == 0) && !modifyManually)) {

            alert('No deje vacias las dos primeras columnas al momento de hacer una asociacion no manual');

        } else if ((asociation == 'row' && (columns_sizes[0] != columns_sizes[1]) && !modifyManually)) {

            alert('Por favor ingrese relaciones uno a uno en la tabla al momento de hacer una asociacion por filas')

        } else if (selected_option === 'prices' && ((columns_sizes[0] != columns_sizes[1]) || columns_sizes[0] != columns_sizes[2]) && !modifyManually) {

            alert('Ingrese relaciones uno a uno sin dejar campos vacios en las columnas diligenciadas')

        } else {

            objects_list.push({ 'asociation': asociation })
            objects_list.push({ 'manual': modifyManually })

            let references_assets_JSON = JSON.stringify(objects_list);
            let response = await sendAssetsJson(references_assets_JSON);

            setRelaciones(response.data[0])
            setReporte(response.data[1])

        }

    }

    return (

        <>

            <div className={(selected_option != 'prices' && selected_option != 'video') ? 'h-[10%] flex flex-nowrap' : 'h-[10%] flex justify-center'} >

                {(selected_option != 'prices' && selected_option != 'video') ?

                    <div className='w-1/2 p-2'>

                        <label htmlFor="upload_filenames" className='bg-gray-300 h-auto text-sm hover:bg-gray-500 w-full inline-block rounded-lg text-center cursor-pointer'>Leer desde carpeta<br></br>(asociación por nombre)</label>
                        <input id="upload_filenames" className='opacity-0' type="file" multiple onClick={(event) => { event.target.value = '' }} onChange={(event) => {

                            const fileList = event.target.files;
                            const fileNames = Array.from(fileList).map((file) => {

                                return file.name;

                            })

                            let newReferences = JSON.parse(JSON.stringify(referencias));

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

                    : null}

                <div className='w-1/2 p-2'>

                    <label htmlFor="upload_calc_sheet" className='bg-gray-300 h-auto text-sm hover:bg-gray-500 w-full inline-block rounded-lg text-center cursor-pointer'>Leer desde hoja de calculo<br></br>(asociación por fila)</label>
                    <input id="upload_calc_sheet" className='opacity-0' type="file" multiple={false} onClick={(event) => { event.target.value = '' }} onChange={(event) => {

                        let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
                        let selectedFile = event.target.files[0];

                        if (selectedFile && fileTypes.includes(selectedFile.type)) {

                            let reader = new FileReader();
                            reader.readAsArrayBuffer(selectedFile);

                            if (selected_option === 'prices') {

                                reader.onload = (e) => {

                                    e.preventDefault();

                                    const workbook = XLSX.read(e.target.result, { type: 'buffer' });
                                    const worksheetName = workbook.SheetNames[0];
                                    const worksheet = workbook.Sheets[worksheetName];
                                    const data = XLSX.utils.sheet_to_json(worksheet);

                                    let newReferences = JSON.parse(JSON.stringify(referencias));

                                    for (let i = 0; i < referencias.length; i++) {

                                        if ((data.length) > i) {

                                            newReferences[i][0] = data[i].SKU;
                                            newReferences[i][1] = data[i].PRECIOS;
                                            newReferences[i][2] = data[i].ZONA;

                                        } else {

                                            newReferences[i][0] = null;
                                            newReferences[i][1] = null;
                                            newReferences[i][2] = null;

                                        }

                                    }

                                    setReferencias(newReferences);
                                    setAsociation('row')

                                }

                            } else {

                                let reader = new FileReader();
                                let headerInfraction = false;
                                reader.readAsArrayBuffer(selectedFile);
                                reader.onload = (e) => {

                                    e.preventDefault();

                                    const workbook = XLSX.read(e.target.result, { type: 'buffer' });
                                    const worksheetName = workbook.SheetNames[0];
                                    const worksheet = workbook.Sheets[worksheetName];
                                    const data = XLSX.utils.sheet_to_json(worksheet);

                                    let newReferences = JSON.parse(JSON.stringify(referencias));

                                    for (let i = 0; i < referencias.length; i++) {

                                        if ((data.length) > i) {

                                            if (data[i]['Nombre del archivo'] !== undefined && data[i]['Numero de articulo'] !== undefined) {

                                                newReferences[i][0] = data[i]['Numero de articulo'];
                                                newReferences[i][1] = data[i]['Nombre del archivo'];

                                            } else {

                                                headerInfraction = true;
                                                break;

                                            }

                                        } else {

                                            newReferences[i][0] = null;
                                            newReferences[i][1] = null;

                                        }

                                    }

                                    if (!headerInfraction) {

                                        setReferencias(newReferences);

                                    } else {

                                        alert('La hoja de calculo ingresada no tiene relaciones uno a uno y/o es la plantilla incorrecta');
                                        headerInfraction = false;

                                    }

                                    setAsociation('row');

                                }

                            }

                        } else {

                            alert('Por favor seleccione un archivo valido');

                        }

                    }} />

                </div>

            </div>

            <div className='h-[80%] bg-[#f0f0f0]'>

                <HotTable
                    data={referencias}
                    colHeaders={assetStructure.header}
                    columns={assetStructure.column_structure}
                    ref={hotTableComponent}
                    width="100%"
                    height="100%"
                    rowHeaders={true}
                    colWidths={230}
                    manualRowMove={true}
                    autoWrapRow={true}
                    autoWrapCol={true}
                    licenseKey="non-commercial-and-evaluation"
                />

            </div>

            <div className='h-[10%] py-2'>

                <button className='bg-green-400 w-full h-full rounded-lg hover:bg-green-800 text-sm' onClick={send_json}>Generar Matriz de relacionamiento</button>

            </div>

        </>

    )

};

export default Upload_table;