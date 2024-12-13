import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/index.jsx'
import { TranslationProvider } from 'react-google-multi-lang';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TranslationProvider apiKey={import.meta.env.VITE_TRANSLATION_API} defaultLanguage="en">
    <RouterProvider router={router}/>
    </TranslationProvider>
    


  </StrictMode>,
)
