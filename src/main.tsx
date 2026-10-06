import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import './styles.css'

// Open /#signup to see the signup page (TICKET-13).
const Page = location.hash === '#signup' ? SignupPage : LoginPage

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>
)
