import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App' 
import router from './router/router'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
