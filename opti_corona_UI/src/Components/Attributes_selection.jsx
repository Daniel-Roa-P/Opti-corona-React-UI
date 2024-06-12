import React from 'react';
import { attributes_structure } from "../attributes_structure";

function Attributes_selection({ options , selectedAttributes , setSelectedAttributes, clasification }) {

    const [attribute, setAttribute] =  React.useState();

    React.useEffect(() => {

        setAttribute(options[0])

    },[options])

    function containsObject(obj, list) {
        for (let i = 0; i < list.length; i++) {
            if ((Object.keys(list[i])[0] == Object.keys(obj)[0]) && (list[i][Object.keys(list[i])[0]] == obj[Object.keys(obj)[0]])) {
                return true;
            }
        }
    
        return false;
    }

    const addAttribute = () => {

        if(!containsObject({[clasification] : attribute}, selectedAttributes)){

            let newAttributes = [...selectedAttributes]
            newAttributes.push({[clasification] : attribute})

            setSelectedAttributes(newAttributes)

        }

    }

    const removeAttribute = () => {

        console.log(selectedAttributes)

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

                <button className="bg-green-300 rounded-lg" onClick={addAttribute}>Agregar</button>
                <button className="bg-red-300 rounded-lg" onClick={removeAttribute}>Retirar</button>

            </div>

        </div>

    )

}

export { Attributes_selection };