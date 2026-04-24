import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // .js を取ってシンプルに './App' にします

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

