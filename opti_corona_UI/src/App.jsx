import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UploadPage } from './Upload_module/UploadPage';
import { UpdatePage } from './Update_module/UpdatePage';
import { UploadProvider } from './Upload_module/UploadContext';
import { UpdateProvider } from './Update_module/UpdateContext';

function App() {

  return (

    <HashRouter>

      <Routes>

        <Route path="/" element={
          <UploadProvider>
            <UploadPage />
          </UploadProvider>} />

        <Route path="/upload/" element={
          <UploadProvider>
            <UploadPage />
          </UploadProvider>} />

        <Route path="/update/" element={
          <UpdateProvider>
            <UpdatePage />
          </UpdateProvider>
          } />

      </Routes>

    </HashRouter>

  );


}

export default App
