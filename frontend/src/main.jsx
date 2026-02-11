 import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { AuthProvider } from './context/AuthProvider.jsx'
import './styles/index.css'
import './styles/global.css'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <AuthProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
        </AuthProvider>
    </BrowserRouter>
   
)
