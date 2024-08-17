import { Link } from "react-router-dom"
import { Movie } from "../../types"

const MovieCard = (movie: Movie) => {
    return (
        <article key={movie.id}>
            <strong>{movie.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
            <Link to={`/movie/${movie.id}`}>Detalhes</Link>
        </article>
    )
}

export default MovieCard