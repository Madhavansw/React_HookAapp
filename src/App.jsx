import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UseStateHooks from "./HooksList/UseStateHooks";
import Navbar from "./HooksList/Navbar";
import { ThemeTwoContextProvider, useThemeTwoContext } from "./Context/ThemeContextTwo";
import NavbarTwo from "./HooksList/NavbarTwo"

export default function App() {
  const { theme } = useThemeTwoContext();

  const styles = {
    minHeight: "100vh",
    background: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#1e1e1e" : "#ffffff",
    padding: "1rem",
  };

  return (
    <div style={styles}>
      <NavbarTwo />
      <p>The current theme is {theme}.</p>
    </div>
  );
}