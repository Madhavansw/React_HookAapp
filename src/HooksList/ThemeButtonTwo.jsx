import { useThemeTwoContext } from "../Context/ThemeContextTwo";

export default function ThemeButtonTwo() {
  const { theme, toggleTheme } = useThemeTwoContext();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}