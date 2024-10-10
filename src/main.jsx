import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ProductData from './Components/ProductData.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductData>
      <App />
    </ProductData>
  </StrictMode>,
)
