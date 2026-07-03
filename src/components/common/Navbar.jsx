import { Link } from "react-router-dom";

export default function Navbar() {
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
    </nav>
  );
}
