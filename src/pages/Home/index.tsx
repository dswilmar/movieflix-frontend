import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import { Movie } from "../../types"
import './styles.css'

const Home: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const loadMovies = async () => {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: import.meta.env.VITE_APP_API_KEY,
                    language: 'pt-BR',
                    page: 1
                }
            })
            setMovies(response.data.results)
        }

        loadMovies()
    }, [])

    return (
        <div className="container">
            <div className="movies-list">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                            <Link to={`/movie/${movie.id}`}>Detalhes</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home