import { createContext, useContext, useState } from "react";

const ThemeTwoContext = createContext(null);

export function ThemeTwoContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeTwoContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeTwoContext.Provider>
  );
}

export function useThemeTwoContext() {
  const context = useContext(ThemeTwoContext);
  if (!context) {
    throw new Error("useThemeTwoContext must be used inside ThemeTwoContextProvider");
  }
  return context;
}