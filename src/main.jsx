import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.scss"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
