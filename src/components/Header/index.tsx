import './styles.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link className="logo" to="/">Movieflix</Link>
            <Link className="bookmarks" to="/bookmarks">Favoritos</Link>
        </header>
    )
}

export default Header