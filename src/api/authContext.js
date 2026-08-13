import { createContext, useContext, useState, useCallback } from "react"
import { login as loginRequest, logout as logoutRequest, register as registerRequest } from "./auth"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = useCallback(async (email, password) => {
        const data = await loginRequest(email, password)
        if (data) {
            setUser(data)
        }
        return data
    }, [])

    const register = useCallback(async (email, password, firstName, lastName) => {
        const data = await registerRequest(email, password, firstName, lastName)
        if (data) {
            setUser(data)
        }
        return data
    }, [])

    const logout = useCallback(async () => {
        await logoutRequest()
        setUser(null)
    }, [])

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
