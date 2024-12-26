import { useState } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import GoogleLogin from './components/GoogleLogin';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="445455291497-0a7cbhm1pdf0f8ptqbt2i634b1uld4u8.apps.googleusercontent.com">
        <GoogleLogin />
      </GoogleOAuthProvider>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
