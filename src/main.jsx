import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { Router } from './Routers/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={Router} />
        </div>
      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>
)
