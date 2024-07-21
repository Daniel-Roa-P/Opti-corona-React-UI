import React from 'react';

const UpdateContext = React.createContext();

function UpdateProvider(props) {

    const [selectedAttributes, setSelectedAttributes] = React.useState([{

        clasification: "default", 
        attribute: "code", 
        attribute_structure: { type: "text" }, 
        mode: "" 

    }
    ]);
    const [impex, setImpex] = React.useState([]);

    return (

        <UpdateContext.Provider value={{

            selectedAttributes,
            setSelectedAttributes,
            impex,
            setImpex,

        }}>

            {props.children}

        </UpdateContext.Provider>

    )

}

export { UpdateContext, UpdateProvider };