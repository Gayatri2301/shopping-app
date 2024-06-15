import { createContext, useState, useContext } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") || null);
    const [data, setData] = useState(user ? JSON.parse(localStorage.getItem('data')) : {});

    const hasEmail = (val) => {
        if (val) {
            localStorage.setItem("hasEmail", "true");
        } else {
            localStorage.removeItem("hasEmail");
        }
    };
    
    const login = (user) => {
        setUser(user);
        const d = JSON.parse(localStorage.getItem('data'));
        setData(d);
        localStorage.setItem("user", user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("hasEmail");
    };

    return (
        <authContext.Provider value={{ user, login, logout, hasEmail, data }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(authContext);
};
