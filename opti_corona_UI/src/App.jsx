import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UploadPage } from './Upload_module/UploadPage';
import { UpdatePage } from './Update_module/UpdatePage';
import { UploadProvider } from './Upload_module/UploadContext';
import { UpdateProvider } from './Update_module/UpdateContext';
import { LoginPage } from './Auth_module/LoginPage';
import { AuthRoute, AuthProvider } from "./Auth_module/AuthContext";

function App() {

  return (

    <HashRouter>

      <AuthProvider>

        <Routes>

          <Route path="/" element={
              <LoginPage />
          } />

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

      </AuthProvider>

    </HashRouter>

  );


}

export default App
