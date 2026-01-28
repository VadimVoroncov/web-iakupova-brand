import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LanguageProvider } from './context/LanguageContext'
import { SplashScreen } from './components/SplashScreen'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <SplashScreen />
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
