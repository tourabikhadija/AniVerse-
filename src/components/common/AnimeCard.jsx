import {Link} from "react-router-dom";
import "../../style/AnimeCard.css";

export default function AnimeCard({anime}){
    return(
        <Link to={`/anime/${anime.mal_id}`} className="anime-link">
        <div className="AnimaCard" >
            <img src={anime.images.jpg.image_url} alt="anime"/>
            <h2>{anime.title} </h2>
            <div className="anime-info">
            <p>⭐{anime.score}</p>
            <p>🎬{anime.episodes}</p>
            <p>📅 {anime.year}</p>
            </div>
            
        </div>
        </Link>
    );
}
