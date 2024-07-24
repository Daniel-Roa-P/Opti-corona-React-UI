import React from 'react';
import { getAttributesListJson } from '../api/task.api';

function Attributes_selection({ clasification, selectedAttributes, setSelectedAttributes }) {

    const [attribute, setAttribute] = React.useState();
    const [options, setOptions] = React.useState([]);
    const [attributesStructure, setAttributesStructure] = React.useState([]);
    const [attributesIds, setAttributesIds] = React.useState([]);
    const [mode, setMode] = React.useState('');

    React.useEffect(() => {

        const getAttributesList = async () => {
            const response = await getAttributesListJson([clasification]);

            setAttributesStructure(response.data)
            setOptions(Object.keys(response.data));
            setAttribute(Object.keys(response.data)[0]);

        }

        getAttributesList()

    }, [clasification])

    const addAttribute = () => {

        if (!(attributesIds.includes(attributesStructure[attribute]['id']))) {

            let newIds = [...attributesIds]
            newIds.push(attributesStructure[attribute]['id'])

            setAttributesIds(newIds);

            let newAttributes = [...selectedAttributes]
            newAttributes.push({clasification: clasification, attribute: attribute , attribute_structure: attributesStructure[attribute]['attribute_structure'], mode: mode })

            setSelectedAttributes(newAttributes);

        } else {

            alert("El atributo ya se encuentra en la tabla");

        }

    }

    const removeAttribute = () => {

        if ((attributesIds.includes(attributesStructure[attribute]['id']))) {

            let newAttributes = []

            let newIds = [...attributesIds]
            newIds = newIds.filter(item => item !== attributesStructure[attribute]['id'])
            setAttributesIds(newIds);

            for (let i = 0; i < selectedAttributes.length; i++) {

                if (JSON.stringify(attributesStructure[selectedAttributes[i]['attribute']]) !== JSON.stringify( attributesStructure[attribute] )) {

                    newAttributes.push(selectedAttributes[i])

                }

            }

            setSelectedAttributes(newAttributes);

        } else {

            alert("El atributo no se encuentra en la tabla");

        }

    }

    function handleOptionChange(e) {
        setAttribute(e.target.value);
        setMode('');
    }

    function handleModeChange(e) {

        setMode(e.target.value);

    }

    return (

        <div className="flex h-full">

            <div className="w-3/4">

                <div className="grid grid-cols-1 place-content-center h-full px-8">

                    <h2 className="block text-lg font-bold text-gray-900 dark:text-white">Atributos</h2>

                    <div className="flex h-full">

                        <select className="w-3/4 h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                            defaultValue={attribute}
                            onChange={handleOptionChange}>

                            {options.map((option) => (

                                <option key={option} value={option}>{option}</option>

                            ))}

                        </select>

                        {(attributesStructure[attribute] != undefined && attributesStructure[attribute]['multivalued'] == 'true') ?

                            <div className="grid grid-cols-2 gap-2 w-1/4">
                                <input type="radio" value="[mode=append]" name="mode" onChange={handleModeChange} />Append
                                <input type="radio" value="[mode=remove]" name="mode" onChange={handleModeChange} />Remove
                            </div>

                            : null}

                    </div>

                </div>
            </div>

            <div className="w-1/4 gap-4 grid grid-cols-1 place-content-center h-full px-8">

                <button className="bg-green-300 rounded-lg hover:bg-green-600" onClick={addAttribute}>Agregar</button>
                <button className="bg-red-300 rounded-lg hover:bg-red-600" onClick={removeAttribute}>Retirar</button>

            </div>

        </div>

    )

}

export { Attributes_selection };