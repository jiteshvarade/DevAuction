import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { PrimeReactProvider } from 'primereact/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <Auth0Provider
      domain="dev-6dk8yyzpc3ogban1.us.auth0.com"
      clientId="7rZrvgrmLvIKAO3ypkWuLezq5SR8XFQx"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
  >
    <PrimeReactProvider><App /></PrimeReactProvider>
    
  </Auth0Provider>,
  //  </React.StrictMode>,
)
