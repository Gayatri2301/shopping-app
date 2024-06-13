import { createContext,useState,useContext } from "react";

const authContext = createContext();

export const AuthProvider = ()=>{
    const [user,setuser] = useState(null);
    const login = (user)=>{
        setuser(user)
    }
    const logout = ()=>{
        setuser(null)
    }
}

export const useAuth = ()=>{
    return useContext(AuthProvider)
}