import React, { createContext, ReactNode, useState } from "react"

type AuthContextType = {
    isAuthenticated: boolean
    login: () => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        { children }
        </AuthContext.Provider>
    );
}