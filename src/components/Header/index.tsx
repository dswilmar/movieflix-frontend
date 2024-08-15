import { useContext } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const Header = () => {

    const { isAuthenticated, logout } = useContext(AuthContext)

    const handleLogout = async () => {
        await logout()
        return <Navigate to="/" />
    }

    return (
        <header>
            <Link className="logo" to="/">Movieflix</Link>
            <div className="bookmarks-links">
                <Link className="bookmarks" to="/bookmarks">Favoritos</Link>
                { isAuthenticated && 
                    <a className="bookmarks" onClick={handleLogout}>Logout</a>
                }
            </div>
        </header>
    )
}

export default Header