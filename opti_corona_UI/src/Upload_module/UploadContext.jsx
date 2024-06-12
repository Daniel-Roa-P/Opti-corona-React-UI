import React from 'react';

const UploadContext = React.createContext();

function UploadProvider(props) {

  const [tipoCargue, setTipoCargue] = React.useState(
    
    {
      upload_option: 'images',
      modifyManually: false,
    }

  );
  const [relaciones, setRelaciones] = React.useState([]);
  const [reporte, setReporte] = React.useState([]);

  return (

    <UploadContext.Provider value={{

      tipoCargue,
      setTipoCargue,
      relaciones,
      setRelaciones,
      reporte,
      setReporte

    }}>

      {props.children}

    </UploadContext.Provider>

  )

}

export { UploadContext, UploadProvider };