
function Attributes_selection({ options }) {

    function handleOptionChange(e) {
        setTipoCargue({
            upload_option: e.target.value,
            modifyManually: false
        });

    }

    return (

        <div className="flex h-full">

            <div className="w-3/4">

                <div className="grid grid-cols-1 place-content-center h-full px-8">

                    <h2 className="block text-lg font-bold text-gray-900 dark:text-white">Atributos</h2>

                    <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                        defaultValue={options[0]}
                        onChange={handleOptionChange}>

                        {options.map((option) => (

                            <option key={option} value={option}>{option}</option>

                        ))}

                    </select>

                </div>
            </div>

            <div className="w-1/4 gap-4 grid grid-cols-1 place-content-center h-full px-8">

                <button className="bg-green-300 rounded-lg">Agregar</button>
                <button className="bg-red-300 rounded-lg">Retirar</button>

            </div>
            
        </div>

    )

}

export { Attributes_selection };