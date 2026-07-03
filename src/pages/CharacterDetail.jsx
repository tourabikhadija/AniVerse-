import { getCharacterDetails } from "../api/jikan.js";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

export default function CharacterDetail() {
  const [character , setCharacter] = useState("")

  const { id }  = useParams()

 useEffect(() => {
  const fetchDataById = async (id) => {
    try {
      const res = await getCharacterDetails(id);
      setCharacter(res.data ?? []);
    } catch {
      setCharacter([]);
    }
  };
  fetchDataById(id); 
 },[id])    

  return (
    <div>
      <p>{character.name}</p>
    </div>
  );
}
