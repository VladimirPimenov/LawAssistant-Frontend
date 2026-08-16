import "./LoginPage.css"

import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../../api/authContext"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const data = await login(email, password)
        if (data) {
            navigate("/")
        } else {
            setError("Неверный Email или пароль")
        }
    }

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Вход</h1>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <div className="login-error">{error}</div>}
                <button type="submit" className="submit-button">Войти</button>
            </form>
        </div>
    )
}

export default LoginPage
