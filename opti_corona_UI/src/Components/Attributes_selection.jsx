import React from 'react';
import { getAttributesListJson } from '../api/task.api';

function Attributes_selection({ clasification, selectedAttributes, setSelectedAttributes }) {

    const [attribute, setAttribute] = React.useState();
    const [options, setOptions] = React.useState([]);
    const [attributesStructure, setAttributesStructure] = React.useState([]);

    React.useEffect(() => {

        const getAttributesList = async () => {
            const response = await getAttributesListJson([clasification]);

            setAttributesStructure(response.data)
            setOptions(Object.keys(response.data));
            setAttribute(Object.keys(response.data)[0]);

        }

        getAttributesList()

    }, [clasification])

    function containsObject(obj, list) {
        for (let i = 0; i < list.length; i++) {
            if ((Object.keys(list[i])[0] == Object.keys(obj)[0]) && (list[i][Object.keys(list[i])[0]] == obj[Object.keys(obj)[0]])) {
                return true;
            }
        }

        return false;
    }

    const addAttribute = () => {

        if (!containsObject(attributesStructure[attribute], selectedAttributes)) {

            let newAttributes = [...selectedAttributes]
            newAttributes.push({[attribute] : attributesStructure[attribute]})

            setSelectedAttributes(newAttributes);

        } else {

            alert("El atributo ya se encuentra en la tabla");

        }

    }

    const removeAttribute = () => {

        if (containsObject({ [clasification]: attribute }, selectedAttributes)) {

            let newAttributes = []

            for(let i = 0; i < selectedAttributes.length; i++){

                if(JSON.stringify(selectedAttributes[i]) !== JSON.stringify({ [clasification]: attribute })){

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
    }

    return (

        <div className="flex h-full">

            <div className="w-3/4">

                <div className="grid grid-cols-1 place-content-center h-full px-8">

                    <h2 className="block text-lg font-bold text-gray-900 dark:text-white">Atributos</h2>

                    <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                        defaultValue={attribute}
                        onChange={handleOptionChange}>

                        {options.map((option) => (

                            <option key={option} value={option}>{option}</option>

                        ))}

                    </select>

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