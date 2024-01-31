import { createContext, useEffect, useState } from "react"

export const AutenticacionContext = createContext();

export const AutenticacionProviderComponent = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    useEffect(() => {

        localStorage.setItem("token", token);

    }, [token, user]);


    const logout = () => {
        setToken("");
        setUser(null);
    };



    return <AutenticacionContext.Provider value={{token, setToken, user, setUser, logout}}>{children}</AutenticacionContext.Provider>;
};