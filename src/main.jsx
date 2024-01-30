import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AutenticacionProviderComponent } from './context/AutenticacionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AutenticacionProviderComponent>
        <App />
     </AutenticacionProviderComponent>
    </BrowserRouter>
  </React.StrictMode>,
)
