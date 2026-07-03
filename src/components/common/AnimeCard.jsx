export default function AnimeCard({anime}){
    return(
        <div className="AnimaCard" >
            <img src={anime.images.jpg.image_url} alt="anime" />
            <h2>{anime.title}</h2>
            <p>{anime.score}</p>
            <p>{anime.episodes}</p>
            <p>{anime.year}</p>
        </div>
    );
}
