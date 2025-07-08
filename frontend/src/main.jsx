import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContentProvider.jsx';

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <ThemeProvider>
  <Router>
    <AuthProvider>
    <App>
    </App>
    </AuthProvider>
  </Router>
  </ThemeProvider>
 </StrictMode>,
);