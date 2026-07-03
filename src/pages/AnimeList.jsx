import { useState, useEffect } from "react";
import { allAnimes,sercheAnime } from "../api/jikan.js";
import AnimeCard from "../components/common/AnimeCard.jsx";

export default function AnimeList() {
  const [anime, setAnime] = useState([])
  const [query, setquery] = useState("");

  const fetchSearchData = async (query) => {
    try {
      const res = await sercheAnime(query);
      setAnime(res.data ?? []);
    } catch {
      setAnime([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      allAnimes().then(res => setAnime(res.data ?? [])).catch(() => setAnime([]));
    } else {
      fetchSearchData(query);
    }
  }



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
     <form onSubmit={handleSearch}>
      <input type="text"  onChange={(e) => setquery(e.target.value) }/>
      <button type="submit">Search</button>
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
