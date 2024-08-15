import { FormEvent, useContext, useState } from 'react'
import './styles.css'
import { AuthContext } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { login, isAuthenticated } = useContext(AuthContext)

    const handleLogin = async(e: FormEvent) => {
        e.preventDefault()
        login({
            email,
            password
        })
    }

    if (isAuthenticated) {
        return (
            <Navigate to='/bookmarks' />
        )
    }
 
    return (
        <div className="container">
            <div className="login">
                <form onSubmit={handleLogin}>
                    <h3>Acesse sua conta para continuar</h3><br />
                    <div className="form-group">
                        <input type="email" placeholder="Seu e-mail" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Sua senha" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Entrar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login