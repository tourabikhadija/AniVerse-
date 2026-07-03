import "../../style/Navbar.css";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // wla n3awdo b emoji ila mabghitich lucide-react
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <nav className="nav">
        <div className="logo">
            <Link to="/">AniVerse</Link>
        </div>

    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/anime">Anime</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </nav>
  );
}
