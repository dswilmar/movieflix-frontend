import React, { createContext, ReactNode, useEffect, useState } from "react"
import authApi from "../services/authApi"
import { User } from "../types"
import { AxiosResponse } from "axios"

type AuthParams = {
    email: string
    password: string
}

type AuthContextType = {
    isAuthenticated: boolean
    user: User | null,
    login: (params: AuthParams) => void
    logout: () => void
}

const initialContextValue: AuthContextType = {
    isAuthenticated: false,
    user: null,
    login: async () => {},
    logout: () => {}
};

export const AuthContext = createContext<AuthContextType>(initialContextValue)

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const loadLocalStorageData = async () => {

            console.log('entrou no useEffect do Context')

            const id = await localStorage.getItem('@Auth.id')
            const name = await localStorage.getItem('@Auth.name')
            const token = await localStorage.getItem('@Auth.token')
            const email = await localStorage.getItem('@Auth.email')
    
            if (id && name && email && token) {
                await setIsAuthenticated(true)
                await setUser({
                    id,
                    name,
                    email
                })
            }
        }

        loadLocalStorageData()
    }, [])

    const login = async(params: AuthParams) => {
        const { email, password } = params
        
        await authApi.post('/session', {
            email,
            password
        }).then((response: AxiosResponse) => {
            setIsAuthenticated(true)
            setUser({
                id: response.data.id,
                name: response.data.name,
                email: response.data.email
            })

            localStorage.setItem('@Auth.id', response.data.id)
            localStorage.setItem('@Auth.name', response.data.name)
            localStorage.setItem('@Auth.token', response.data.token)
            localStorage.setItem('@Auth.email', response.data.email)
        }).catch((error) => {
            return alert(error.response.data.error)
        })

        

    };

    const logout = async () => {
        await localStorage.clear();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
        { children }
        </AuthContext.Provider>
    );
}