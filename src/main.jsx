import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { Router } from './Routers/Router';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
