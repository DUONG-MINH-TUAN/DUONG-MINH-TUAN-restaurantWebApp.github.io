import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './flag.css';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

    <BrowserRouter>
    <PrimeReactProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
