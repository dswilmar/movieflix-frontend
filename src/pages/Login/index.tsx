import './styles.css'

const Login: React.FC = () => {
    return (
        <div className="container">
            <div className="login">
                <form>
                    <h3>Acesse sua conta para continuar</h3><br />
                    <div className="form-group">
                        <input type="email" placeholder="Seu e-mail" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Sua senha" required />
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