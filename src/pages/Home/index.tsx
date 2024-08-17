import { useEffect, useState } from "react"
import api from "../../services/api"
import { Movie } from "../../types"
import './styles.css'
import MovieCard from "../../components/MovieCard"

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
                        <MovieCard id={movie.id} title={movie.title} poster_path={movie.poster_path} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home