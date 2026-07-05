import {getAnimeById} from "../api/jikan";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer.jsx";
import  "../style/AnimeDetail.css"

export default function AnimeDetail() {
  const [anime, setAnime] = useState("")
  const { id }  = useParams()

 useEffect(() => {
  const fetchDataById = async (id) => {
    try {
      const res = await getAnimeById(id);
      setAnime(res.data ?? []);
    } catch {
      setAnime([]);
    }
  };
  fetchDataById(id); 
 },[id])
  

  return (
  <div>

    <section className="detail-anime">

      <h1>{anime.title}</h1>

      <img
        src={anime?.images?.jpg?.image_url}
        alt={anime?.title}
      />

      <img
        src={anime?.images?.webp?.large_image_url}
        alt={anime?.title}
        className="cover-img"
      />

      <div className="container">

        <p>{anime.synopsis}</p>
        <p>⭐ {anime.score}</p>
        <p>📅 {anime.year}</p>

        <section className="genres">
          {anime.genres?.map((genre) => (
            <h2 key={genre.mal_id}>{genre.name}</h2>
          ))}
        </section>

        <section className="anime-extra">
          <h1>Studios</h1>

          {anime.studios?.map((studio) => (
            <h2 key={studio.mal_id}>{studio.name}</h2>
          ))}

          <p>Episodes: {anime.episodes}</p>

          <iframe
            src={anime?.trailer?.embed_url}
            frameBorder="0"
            title="Anime Trailer"
          ></iframe>
        </section>

        <Link
          to={`/anime/${anime.mal_id}/characters`}
          className="characters-link"
        >
          <button className="characters-btn">
            View Characters
          </button>
        </Link>

      </div>

    </section>

    <Footer />

  </div>
);
}