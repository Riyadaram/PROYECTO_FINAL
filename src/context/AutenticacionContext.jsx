import { createContext, useEffect, useState } from "react"

export const AutenticacionContext = createContext();

export const AutenticacionProviderComponent = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState((localStorage.getItem("user")));

    useEffect(() => {

        localStorage.setItem("token", token);
        localStorage.setItem("user", user); // user_name

    }, [token, user]);


    const logout = () => {
        setToken("");
        setUser(null);
    };



    return <AutenticacionContext.Provider value={{token, setToken, user, setUser, logout}}>{children}</AutenticacionContext.Provider>;
};