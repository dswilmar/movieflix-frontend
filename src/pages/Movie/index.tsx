import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../services/api"
import { Movie } from "../../types"
import './styles.css'

const MovieDetails: React.FC = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        const loadMovie = async () => {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: import.meta.env.VITE_APP_API_KEY,
                    language: 'pt-BR',
                }
            }).then((response) => {
                setMovie(response.data)
                setIsLoading(false)
            }).catch((error) => {
                
            })
        }
        loadMovie()
    }, [])

    if (isLoading) {
        return (
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }

    if (!movie) {
        return (
            <div>
                <h1>Filme não encontrado</h1>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                <h3>Sinopse</h3>
                <span>{movie.overview}</span>
            </div>
        </div>
    )
}

export default MovieDetails