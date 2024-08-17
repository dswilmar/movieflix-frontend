import { useContext, useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard"
import { Movie } from "../../types"
import './styles.css'
import authApi from "../../services/authApi"
import { AuthContext } from "../../contexts/AuthContext"

const Home: React.FC = () => {

    const { user } = useContext(AuthContext)
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const loadMovies = async () => {
            if (user) {
                const response = await authApi.get('me', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    }
                })
                const movies = response.data.bookmarks.map((bookmark: any) => ({
                    id: bookmark.movie_id,
                    title: bookmark.movie_title,
                    poster_path: bookmark.movie_poster_path,
                }))
                setMovies(movies)
            }
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