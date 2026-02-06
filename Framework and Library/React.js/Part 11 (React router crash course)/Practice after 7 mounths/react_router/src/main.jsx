import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { Home, About, Contact, Header, Footer } from './components/components';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteProvider />
  </StrictMode>,
)
