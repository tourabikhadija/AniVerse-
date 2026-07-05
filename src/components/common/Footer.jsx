import { Link } from "react-router-dom";
import "../../style/Footer.css"; 

export default function Footer(){
    return(
        <footer className="footer">
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
      <p>
        Discover, organize, and track your favorite anime all in one place.
      </p>
      <h3>© 2026 AniVerse</h3>
        </footer>
    );
}