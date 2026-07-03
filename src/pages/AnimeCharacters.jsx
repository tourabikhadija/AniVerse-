import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnimeCharacters } from "../api/jikan";
import { Link } from "react-router-dom";

export default function AnimeCharacters() {
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDataById = async (id) => {
      try {
        const res = await getAnimeCharacters(id);
        setCharacters(res.data ?? []);
      } catch {
        setCharacters([]);
      }
    };
    fetchDataById(id);
  }, [id]);

  return (
    <>
      {characters.map((character) => (
        <Link key={character.character.mal_id} to={`/characters/${character.character.mal_id}`}>
          <div>
          <img
            src={character?.character?.images?.jpg?.image_url}
            alt={character?.character?.name}
          />
          <p>{character.character.name}</p>
          <p>{character.character.role}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
