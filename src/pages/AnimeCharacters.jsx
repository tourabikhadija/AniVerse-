import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnimeCharacters } from "../api/jikan";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer.jsx";
import  "../style/AnimeCharacters.css"


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
    <div className="characters-grid">

      {characters.map((character) => (
        <Link
          key={character.character.mal_id}
          to={`/characters/${character.character.mal_id}`}
          className="character-card"
        >
          <div>
            <img
              src={character?.character?.images?.jpg?.image_url}
              alt={character?.character?.name}
            />
            <p className="name">{character.character.name}</p>
            <p className="role">{character.character.role}</p>
          </div>
        </Link>
      ))}

    </div>

    <Footer />
  </>
);
}