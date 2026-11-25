import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeTwoContextProvider } from "./Context/ThemeContextTwo.jsx"; // check your path

// inside render(...)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeTwoContextProvider>
   <App />
</ThemeTwoContextProvider>
  </StrictMode>
);