import { useState, useEffect } from "react";
import { allAnimes } from "../api/jikan.js";
import AnimeCard from "../components/common/AnimeCard.jsx";

export default function AnimeList() {
  const [anime, setAnime] = useState([])
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await allAnimes();
        setAnime(res.data ?? []);
      } catch {
        setAnime([]);
      }
    };
    fetchAllData();
  } , [])

  return (
    <div>
      <form>
        <input type="text" alt="Recherche" />
        <button>Recherche </button>
      </form>
      <section>
        <h1>liste Animes</h1>
          {anime.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
      </section>
    </div>
  );
}
