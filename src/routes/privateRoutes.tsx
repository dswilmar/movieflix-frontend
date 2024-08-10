import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    const { isAuthenticated } = useContext(AuthContext)!
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes