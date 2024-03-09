const options_dictionary = { 
    '---' : [],
    'images' : ['Modificar manualente', 'Incluir miniatura', 'Incluir texto alterno'] , 
    'docs' : ['Modificar manualente', 'Definir tipo de documento'] , 
    'blueprints': ['Modificar manualente'],
    'rfa': ['Modificar manualente', 'Generar IMPEX'],
    'prices': ['Precios por zona']
}

const Upload_options = (props) => {

    const option = props.option;
    const listOptions = options_dictionary[option].map((potato) => <li key={potato}>{potato}</li> );  
    
    return (
    
    <ul>{listOptions}</ul>  
    
    );

};

export default Upload_options;