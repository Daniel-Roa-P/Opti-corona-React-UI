const options_dictionary = {
    images: [{id:'images_modify_manually', text:'Modificar manualente', default_box:false}, {id: 'include_thumbnail', text:'Incluir miniaturas', default_box:true}] ,
    docs: [{id:'docs_modify_manually', text:'Modificar manualente', default_box:false}],
    blueprints: [{id:'blueprints_modify_manually', text:'Modificar manualente', default_box:false}],
    rfa: [{id:'rfa_modify_manually', text:'Modificar manualente', default_box:false},{id:'generate_impex', text:'Generar IMPEX', default_box:true}],
    prices: [{id:'localized_prices', text:'Precios por zona', default_box:false}]
}

const Upload_options = (props) => {

    const option = props.option;
    const inner_dictionary = options_dictionary[option]

    const listOptions = inner_dictionary.map( (object) => 
    
    <>
        <input type="checkbox" 
        id={object.id} 
        name={object.id}
        key={object.id}
        defaultChecked={object.default_box}
        onChange={(event) => console.log(event.target.value)}/>
        <label>{object.text}</label>
        <br></br>
    </>
    
    );

    return (

        <form>{listOptions}</form>

    );

};

export default Upload_options;