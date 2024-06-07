import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UploadPage } from './Upload_module/UploadPage';
import { UpdatePage } from './Update_module/UpdatePage';

function App() {

  return( 
  
    <HashRouter>
  
        <Routes>
  
          <Route path="/" element={<UploadPage />}/>
          
          <Route path="/upload/" element={<UploadPage />}/>
          
          <Route path="/update/" element={<UpdatePage />}/>
          
        </Routes>
  
    </HashRouter>
    
    );
  
  
}

export default App
