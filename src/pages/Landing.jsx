import { topAnimes, seasonAnimes } from "../api/jikan.js";
import AnimeCard from "../components/common/AnimeCard.jsx";
import { useState, useEffect } from "react";
import  "../style/Landing.css"
import cover from "../assets/cover.png"; 
import anime from "../assets/anime.png";

export default function Landing() {
  const [trending, setTrending] = useState([]);
  const [season, setSeason] = useState([]);

  useEffect(() => {
    const fetchTopData = async () => {
      try {
        const res = await topAnimes();
        setTrending(res.data ?? []);
      } catch {
        setTrending([]);
      }
    };
    fetchTopData();

    setTimeout(() => {
      const fetchSeasonData = async () => {
        try {
          const res = await seasonAnimes();
          setSeason(res.data ?? []);
        } catch {
          setSeason([]);
        }
      };
      fetchSeasonData();
    }, 1000);
  }, []);

  return (
    <div>
    <section className="hero">

      <div className="image-hero">
          <img src={cover} alt="Anime cover" className="cover-img" />
          <img src={anime} alt="Anime" className="anime-img" />

      </div>

      <h4>Track, Discover & Enjoy Anime</h4>
      <h1>Discover Your Anime Universe</h1>

      <p>
        Explore thousands of anime, organize your personal collection and track
        your watching progress.
      </p>

      <button>Explore Anime</button>
      <button>My Library</button>

      <ul>
        <li>10K+ Anime</li>
        <li>500K+ Users</li>
        <li>50K+ Favorites</li>
      </ul>
    </section>


      <section className="Topanime">
        <h1>top</h1>
        {trending.slice(0, 6).map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </section>

      <section>
        <h1>season</h1>
        {season.slice(0, 6).map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </section>
    
    </div>
  );
}
