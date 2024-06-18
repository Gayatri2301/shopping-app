import { createContext, useState, useContext } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") || null);
    const [data, setData] = useState(user ? JSON.parse(localStorage.getItem('data')) : {});
    const [product,setProduct] = useState([]);
    const [wishList,setWishList] = useState(localStorage.getItem('wishList')? JSON.parse(localStorage.getItem('wishList')) : []);
    const [carts,setCarts] = useState(localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []);

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
        <authContext.Provider value={{ user, login, logout, hasEmail, data,wishList,setWishList,carts,setCarts }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(authContext);
};
