import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContext } from './Context/Appcontext.js'
import {Mycontextprovider} from './Context/Appcontextprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mycontextprovider>
  <App />
</Mycontextprovider>

  </StrictMode>,
)
