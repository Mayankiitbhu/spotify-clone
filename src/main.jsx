import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SpotifyContextProvider from './components/store/SpotifyContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpotifyContextProvider>
      <App />
    </SpotifyContextProvider>
  </React.StrictMode>,
)
