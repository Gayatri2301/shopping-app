import { createContext, useState, useContext } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") || null);

    const hasEmail = (val) => {
        if (val) {
            localStorage.setItem("hasEmail", "true");
        } else {
            localStorage.removeItem("hasEmail");
        }
    };
    localStorage.setItem("user", user);
    const login = (user) => {
        setUser(user);
        
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("hasEmail");
    };

    return (
        <authContext.Provider value={{ user, login, logout, hasEmail }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(authContext);
};
