import { JIKAN_BASE } from "../utils/constants";

async function topAnimes(){
    const res = await fetch(`${JIKAN_BASE}/top/anime?filter=bypopularity`)
    const resdata = await res.json()
    return resdata
}

async function seasonAnimes(){
    const res = await fetch(`${JIKAN_BASE}/seasons/now`)
    const resdata = await res.json()
    return resdata
}

async function allAnimes(page=1){
    const res = await fetch(`${JIKAN_BASE}/anime?page=${page}&limit=24`)
    const resdata = await res.json()
    return resdata
}

async function sercheAnime(query, page=1){
    const res = await fetch(`${JIKAN_BASE}/anime?q=${encodeURIComponent(query)}&page=${page}&limit=24`)
    const resdata = await res.json()
    return resdata
}
async function getAnimeById(id){
    const res = await fetch(`${JIKAN_BASE}/anime/${id}`)
    const resdata = await res.json()
    return resdata
}

async function getAnimeCharacters(id){
    const res = await fetch(`${JIKAN_BASE}/anime/${id}/characters`)
    const resdata = await res.json()
    return resdata
}

async function getCharacterDetails(id){
    const res = await fetch(`${JIKAN_BASE}/characters/${id}`)
    const resdata = await res.json()
    return resdata
}


export { topAnimes ,seasonAnimes, allAnimes,sercheAnime,getAnimeById, getAnimeCharacters , getCharacterDetails}
