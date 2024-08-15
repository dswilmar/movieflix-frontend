import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Bookmarks: React.FC = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="container">
            <h1>Favoritos</h1>
            <p>{user?.name}</p>            
        </div>
    )
}

export default Bookmarks