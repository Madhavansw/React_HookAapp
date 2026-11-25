import ThemeButtonTwo from "./ThemeButtonTwo";

// Navbar passes no theme props; ThemeButton reads the context itself
export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h2>My App</h2>
      <ThemeButtonTwo />
    </nav>
  );
}