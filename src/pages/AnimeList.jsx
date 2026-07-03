import { useState, useEffect } from "react";
import { allAnimes,sercheAnime } from "../api/jikan.js";
import AnimeCard from "../components/common/AnimeCard.jsx";

export default function AnimeList() {
  const [anime, setAnime] = useState([])
  const [query, setquery] = useState("");
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);

  const fetchSearchData = async (query, page = 1) => {
    try {
      const res = await sercheAnime(query, page);
      setAnime(res.data ?? []);
      setHasNext(res.pagination?.has_next_page ?? false);
    } catch {
      setAnime([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    if (query.trim() === "") {
      allAnimes(1).then(res => { setAnime(res.data ?? []); setHasNext(res.pagination?.has_next_page ?? false); }).catch(() => setAnime([]));
    } else {
      fetchSearchData(query, 1);
    }
  }

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await allAnimes(page);
        setAnime(res.data ?? []);
        setHasNext(res.pagination?.has_next_page ?? false);
      } catch {
        setAnime([]);
      }
    };
    fetchAllData();
  } , [page])

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
      <div>
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>←</button>
        <span>{page}</span>
        <button disabled={!hasNext} onClick={() => setPage(p => p + 1)}>→</button>
      </div>
    </div>
  );
}
