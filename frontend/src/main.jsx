 import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import './styles/index.css'
import './styles/global.css'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
       
    </BrowserRouter>
   
)
