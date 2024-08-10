import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Movie from "../pages/Movie"
import Header from "../components/Header"
import Login from "../pages/Login"
import Bookmarks from "../pages/Bookmarks"
import { AuthProvider } from "../contexts/AuthContext"
import PrivateRoutes from "./privateRoutes"

const RoutesApp = () => {    

    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/movie/:id" element={ <Movie /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/bookmarks" element={ <PrivateRoutes /> }>
                        <Route path="/bookmarks" element={ <Bookmarks /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default RoutesApp