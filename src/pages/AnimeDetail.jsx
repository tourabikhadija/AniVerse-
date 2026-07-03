import {getAnimeById} from "../api/jikan";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



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
      <h2>page AnimeDetail </h2>
      <h1>{anime.title}</h1>
      <img src={anime?.images?.jpg?.image_url} alt={anime?.title} /> 
      <p>{anime.synopsis}</p> 
      <p>{anime.score}</p>
      <p>{anime.year}</p>
      <h1>genres</h1>
      {anime.genres?.map((genre)=> (
        <h2 key={genre.mal_id}>{genre.name}</h2>
      ))}
      <h1>studios</h1>
      {anime.studios?.map((studio)=>(
        <h2 key={studio.mal_id}>{studio.name}</h2>
      ))}
      <p>{anime.episodes}</p>
      <iframe src={anime?.trailer?.embed_url} frameBorder="0"></iframe>

      <Link to={`/anime/${anime.mal_id}/characters`}>
      <button>character anime</button>
      </Link>
    </div>
  );
}
